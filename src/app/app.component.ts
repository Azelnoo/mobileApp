import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
//import { Toast } from '@ionic-native/toast';
//import { TextToSpeech } from '@ionic-native/text-to-speech';
//import { Vibration } from '@ionic-native/vibration';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { GeolocPage } from '../pages/geoloc/geoloc';
import { ToasterPage } from '../pages/toaster/toaster';
import { TtsPage } from '../pages/tts/tts';
import { VibrationPage } from '../pages/vibration/vibration';
import { PhotoPageModule } from '../pages/photo/photo.module';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      //{ title: 'List', component: ListPage },
      { title: 'Géolocalisation', component: GeolocPage },
      { title: 'Disguised Toast', component: ToasterPage },
      { title: "Guess who's Talking ?", component: TtsPage },
      { title: 'Vibration', component: VibrationPage }

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
