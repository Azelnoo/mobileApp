import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Camera, CameraOptions} from '@ionic-native/camera';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
import { ToasterPage } from '../toaster/toaster';
import { Geolocation } from '@ionic-native/geolocation';
import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 GoogleMapOptions,
 CameraPosition,
 MarkerOptions,
 Marker
} from '@ionic-native/google-maps';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  app: App;
  notif: ToasterPage;
  base64Image : string;
  public latitude:Number;
  public longitude:Number;
  map: GoogleMap;

  constructor(public navCtrl: NavController,
    private camera: Camera,
     private base64ToGallery: Base64ToGallery,
     private geolocation: Geolocation,
     private googleMaps: GoogleMaps) {
    this.app = new App("PI",3.1415);
    //this.notif = new ToasterPage();

  }

  loadMap() {
    console.log("Rentré dans loadMap");
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 43.0741904,
          lng: -89.3809802
        },
        zoom: 18,
        tilt: 30
      }
    };

    this.map = this.googleMaps.create('map_canvas', mapOptions);
    console.log("createMap en cours");
    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        console.log('Map is ready!');

        // Now you can use all methods safely.
        this.map.addMarker({
            title: 'Ionic',
            icon: 'blue',
            animation: 'DROP',
            position: {
              lat: 43.0741904,
              lng: -89.3809802
            }
          })
          .then(marker => {
            marker.on(GoogleMapsEvent.MARKER_CLICK)
              .subscribe(() => {
                alert('clicked');
              });
          });

      });
    }

  showGPS(){
   let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
    // data can be a set of coordinates, or an error (if an error occurred).
    this.latitude = data.coords.latitude;
    this.longitude = data.coords.longitude;
  });
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
