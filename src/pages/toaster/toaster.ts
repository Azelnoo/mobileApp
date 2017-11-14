import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Toast } from '@ionic-native/toast';
/**
 * Generated class for the ToasterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-toaster',
  templateUrl: 'toaster.html',
})
export class ToasterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: Toast) {
  }

  affichageToast(){
    this.toast.show(`Toasting a Toast !`, '5000', 'center').subscribe(
  toast => {
    console.log(toast);
  }  );
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad ToasterPage');
  }

}
