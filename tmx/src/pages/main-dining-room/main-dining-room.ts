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
   public waitList;
	
  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    this.waitList = [
      {title: 'Party 1', description: 'Anniversary Dinner'},
      {title: 'Party 2', description: 'Thinksgiving lunch'},
      {title: 'Party 3', description: 'Birthday Diner'},
      {title: 'Party 4', description: 'Anniversary lunch'}
    ];
  }
  
  addParty() {
	  console.log('add party');
	  this.navCtrl.push(AddPartyPage);
	  
  }
  saveItem(item){
    this.waitList.push(item);
    //this.dataService.save(this.waitList);
  }
  // viewItem(item){
  //   this.navCtrl.push(partDetailPage, {
  //     item: item
  //   });
  // }

}
