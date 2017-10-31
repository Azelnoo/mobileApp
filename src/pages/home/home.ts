import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  app:any ={nom: String, version: Number};

  constructor(public navCtrl: NavController) {
    //app = new App;
    this.app.nom = "nomApp";
    this.app.version = 0.1;
  }
  //function changeName() {
  //  this.app.nom = "nom modifié";
  //}
}

 class App {
constructor(public nom: String,public version: Number){
  }

}
