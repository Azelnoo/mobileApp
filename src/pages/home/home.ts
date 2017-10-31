import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  app: App;

  constructor(public navCtrl: NavController) {
    this.app = new App("nom",0.1);
    //this.app.nom = "nomApp";
    //this.app.version = 0.1;
  }
  changeName() {
    console.log("Clic!");
  }
}

 class App {
constructor(public nom: String,public version: Number){
  }

}
