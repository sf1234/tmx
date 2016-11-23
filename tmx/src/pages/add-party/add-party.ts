import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MainDiningRoomPage } from '../main-dining-room/main-dining-room';

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
  name : string ='';
  notes : string ='';
  waitTime : number;
  save() {
		  let waitList :any = JSON.parse(localStorage.getItem('waitList'))
  		  let waitObj : {name: string,notes:string , waitTime : number} = {name:this.name , notes : this.notes , waitTime : this.waitTime*60 };
		  if(!waitList){
			localStorage.setItem('waitList', JSON.stringify([waitObj]));
		  }else{
			  waitList.push(waitObj);
			  localStorage.setItem('waitList', JSON.stringify(waitList));
		  }
		  this.navCtrl.push(MainDiningRoomPage);

	  }

    dismiss() {
        this.navCtrl.push(MainDiningRoomPage);
    }
}
