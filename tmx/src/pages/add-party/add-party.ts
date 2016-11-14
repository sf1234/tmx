import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the AddParty page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-party',
  templateUrl: 'add-party.html'
})
export class AddPartyPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello AddPartyPage Page');
  }

}
