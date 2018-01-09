import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Camera, CameraOptions} from '@ionic-native/camera';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
import { ToasterPage } from '../toaster/toaster';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  app: App;
  notif: ToasterPage;
  base64Image : string;

  constructor(public navCtrl: NavController,private camera: Camera, private base64ToGallery: Base64ToGallery) {
    this.app = new App("PI",3.1415);
    //this.notif = new ToasterPage();

  }
  ClicMe() {
    console.log("Clic!");
  }

  takePic(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
         // imageData is either a base64 encoded string or a file URI
           // If it's base64:
      this.base64Image = imageData;
      this.base64ToGallery.base64ToGallery(this.base64Image, { prefix: '_img' }).then(
          res => console.log('Saved image to gallery ', res), 
          err => console.log('Error saving image to gallery ', err)
            );
          }, (err) => {
         // Handle error
        });
  }
}


 class App {
constructor(public nom: String,public version: Number){
  }

}
