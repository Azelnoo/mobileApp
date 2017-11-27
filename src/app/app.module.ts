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
//import { Vibration } from '@ionic-native/vibration';

//page imports
import { GeolocPageModule } from '../pages/geoloc/geoloc.module';
import { ToasterPageModule } from '../pages/toaster/toaster.module';
import { Geolocation } from '@ionic-native/geolocation';
import { TtsPageModule } from '../pages/tts/tts.module';
//import { VibrationPageModule } from '../pages/vibration/vibration.module';



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
    //VibrationPageModule,
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
    //Vibration,
    TextToSpeech,
    StatusBar,
    Camera,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
