import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the FloorPlanEditor page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-floor-plan-editor',
  templateUrl: 'floor-plan-editor.html'
})
export class FloorPlanEditorPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello FloorPlanEditorPage Page');
  }

}
