import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Camera, CameraOptions} from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  app: App;

  constructor(public navCtrl: NavController,private camera: Camera) {
    this.app = new App("nom",0.1);
    //this.app.nom = "nomApp";
    //this.app.version = 0.1;
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
     let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }
}


 class App {
constructor(public nom: String,public version: Number){
  }

}
