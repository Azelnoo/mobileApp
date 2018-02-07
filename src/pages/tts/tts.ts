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
  texttospeech(txt: string, lng: string){

    this.tts.speak({
        text: txt,
        locale: lng,
        rate: 1
    })
    .then(() => console.log('Success'))
    .catch((reason: any) => console.log(reason));
}
  randomLanguage(txt: string, lng: string){
    let rng = Math.random();
    rng = rng*23;
    rng = Math.round(rng);
    console.log(rng);

    if (rng == 1){
      lng = "en-US";}
    else if (rng == 2){
      lng = "fr-FR";}
    else if (rng == 3){
      lng = "fi-FI";}
    else if (rng == 4){
      lng = "ar-SA";}
    else if (rng == 5){
      lng = "zh-CN";}
    else if (rng == 6){
      lng = "de-DE";}
    else if (rng == 7){
      lng = "ja-JP";}
    else if (rng == 8){
      lng = "ko-KR";}
    else if (rng == 9){
      lng = "es-ES";}
    else if (rng == 10){
      lng = "af-ZA";}
    else if (rng == 11){
      lng = "it-IT";}
    else if (rng == 12){
      lng = "hi-IN";}
    else if (rng == 13){
      lng = "lt-LT";}
    else if (rng == 14){
      lng = "cs-CZ";}
    else if (rng == 15){
      lng = "da-DK";}
    else if (rng == 16){
      lng = "pl-PL";}
    else if (rng == 17){
      lng = "pt-PT";}
    else if (rng == 18){
      lng = "ro-RO";}
    else if (rng == 19){
      lng = "ru-RU";}
    else if (rng == 20){
      lng = "sk-SK";}
    else if (rng == 21){
      lng = "sv-SE";}
    else if (rng == 22){
      lng = "tr-TR";}
    else if (rng == 23){
      lng = "vi-VN";}

      this.tts.speak({
          text: txt,
          locale: lng,
          rate: 1
      })
  }
  randomBonjour(txt: string, lng: string){
      let rng = Math.random();
      rng = rng*23;
      rng = Math.round(rng);
      console.log(rng);

      if (rng == 1){
        txt = "Hello";
        lng = "en-US";}
      else if (rng == 2){
        txt = "Bonjour";
        lng = "fr-FR";}
      else if (rng == 3){
        txt = "hyvää päivää";
        lng = "fi-FI";}
      else if (rng == 4){
        txt = "Salem";
        lng = "ar-SA";}
      else if (rng == 5){
        txt = "ohayo";
        lng = "zh-CN";}
      else if (rng == 6){
        txt = "guten tag";
        lng = "de-DE";}
      else if (rng == 7){
        txt = "konnichiwa";
        lng = "ja-JP";}
      else if (rng == 8){
        txt = "anyang";
        lng = "ko-KR";}
      else if (rng == 9){
        txt = "hola";
        lng = "es-ES";}
      else if (rng == 10){
        txt = "goiedag";
        lng = "af-ZA";}
      else if (rng == 11){
        txt = "buongiorno";
        lng = "it-IT";}
      else if (rng == 12){
        txt = "namaste";
        lng = "hi-IN";}
      else if (rng == 13){
        txt = "laba diena";
        lng = "lt-LT";}
      else if (rng == 14){
        txt = "no hao";
        lng = "cs-CZ";}
      else if (rng == 15){
        txt = "goddag";
        lng = "da-DK";}
      else if (rng == 16){
        txt = "dzien dobry";
        lng = "pl-PL";}
      else if (rng == 17){
        txt = "bom dia";
        lng = "pt-PT";}
      else if (rng == 18){
        txt = "buna ziua";
        lng = "ro-RO";}
      else if (rng == 19){
        txt = "priviet";
        lng = "ru-RU";}
      else if (rng == 20){
        txt = "dobry den";
        lng = "sk-SK";}
      else if (rng == 21){
        txt = "bures";
        lng = "sv-SE";}
      else if (rng == 22){
        txt = "günaydin";
        lng = "tr-TR";}
      else if (rng == 23){
        txt = "shao";
        lng = "vi-VN";}

        this.tts.speak({
            text: txt,
            locale: lng,
            rate: 1
        })
  }
  }
