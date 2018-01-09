import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';
/**
 * Generated class for the TtsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tts',
  templateUrl: 'tts.html',
})
export class TtsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private tts: TextToSpeech) {
  }
  texttospeech(txt: string){

    this.tts.speak(txt)
    .then(() => console.log('Success'))
    .catch((reason: any) => console.log(reason));

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TtsPage');
  }

}
