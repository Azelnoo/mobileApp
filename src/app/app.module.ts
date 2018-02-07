import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

// Ionic Imports
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Camera, CameraOptions} from '@ionic-native/camera';
import { Toast } from '@ionic-native/toast';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { Vibration } from '@ionic-native/vibration';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
import { Geolocation } from '@ionic-native/geolocation';

//page imports
import { GeolocPageModule } from '../pages/geoloc/geoloc.module';
import { ToasterPageModule } from '../pages/toaster/toaster.module';
import { TtsPageModule } from '../pages/tts/tts.module';
import { VibrationPageModule } from '../pages/vibration/vibration.module';
import { PhotoPageModule } from '../pages/photo/photo.module'; //base64toGallery

//Google maps
import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 GoogleMapOptions,
 CameraPosition,
 MarkerOptions,
 Marker
} from '@ionic-native/google-maps';
import { Component } from "@angular/core/";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    GeolocPageModule,
    ToasterPageModule,
    TtsPageModule,
    VibrationPageModule,
    PhotoPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    Toast,
    Geolocation,
    Vibration,
    Base64ToGallery,
    TextToSpeech,
    StatusBar,
    Camera,
    SplashScreen,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
