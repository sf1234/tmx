import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the FloorTwo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-floor-two',
  templateUrl: 'floor-two.html'
})
export class FloorTwoPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello FloorTwoPage Page');
  }

}
