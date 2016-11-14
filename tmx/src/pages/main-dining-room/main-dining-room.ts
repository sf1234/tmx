import { Component , ViewChild } from '@angular/core';
import { NavController , Nav } from 'ionic-angular';
import { AddPartyPage } from '../add-party/add-party';
/*
  Generated class for the MainDiningRoom page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'main-dining-room.html'
})
export class MainDiningRoomPage {

	 @ViewChild(Nav) nav: Nav;
	
  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello MainDiningRoomPage Page');
  }
  
  addParty() {
	  console.log('add party');
	  this.navCtrl.push(AddPartyPage);
	  
  }

}
