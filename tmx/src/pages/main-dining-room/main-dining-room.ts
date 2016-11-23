import { Component, ViewChild} from '@angular/core';
import { NavController, Nav, PopoverController, NavParams, ViewController } from 'ionic-angular';
import { AddPartyPage } from '../add-party/add-party';
import { RealTime } from '../../app/shared/sdk/services';
import { FloorService } from '../../providers/floor-service';


@Component({
  templateUrl: 'main-dining-room.html',
})
export class MainDiningRoomPage {

  @ViewChild(Nav) nav: Nav;
  // @ViewChild('floorOne', { read: ElementRef }) floorOne: ElementRef;
  // @ViewChild('floorTwo', { read: ElementRef }) floorTwo: ElementRef;
  // @ViewChild('header', { read: ElementRef }) header: ElementRef;
  title = 'Order Status Messages Test Page';
  public orderNum: string = '_';
  public tableId: string = '_';
  public orderStatus: string = '_';
  tableStatus = "";
  waitList: any;
  fillColor: string = "Red";
  cashedStatus: string = "0";
  currentFloor: number ;
  pageHeader: string = "Main Dinning Room";

  constructor(public navCtrl: NavController,
    public rt: RealTime,
    public popoverCtrl: PopoverController,
    public floorService: FloorService) {


    this.floorService.getFloor.subscribe((floor) => {
      this.currentFloor = floor.floorNo;
      this.pageHeader = floor.header;
    });
  }



  ionViewDidLoad() {

    this.rt.IO.on('SusEvent').subscribe((message: any) => {
      let msgObj = JSON.parse(message.toString());
      this.orderNum = msgObj['order_number'];
      this.tableId = msgObj['table_id'];
      this.orderStatus = msgObj['status'];
      console.log(this.tableId + "_" + this.orderStatus);
      document.getElementById(this.tableId + "_" + this.orderStatus).setAttribute('opacity', "1");

    });
     this.setCurrentFloor();
	   this.getWaitingList();
  }

  setCurrentFloor(){
    let floor = JSON.parse(localStorage.getItem('currentFloor'));
    this.currentFloor = floor ? floor.floorNo : 1;
    this.pageHeader = floor? floor.header : "";

  }

  addParty() {
    this.navCtrl.push(AddPartyPage);
  }

  getWaitingList() {
	   this.waitList = JSON.parse(localStorage.getItem('waitList'));
  }

  changeFloor(data) {
    setTimeout(() => {
      this.currentFloor = data;
      this.pageHeader = "Chaneg";
      this.changeFloor(++data);
    }, 500);
  }

  presentPopover(ev) {

    let popover = this.popoverCtrl.create(PopoverPage
      //  , {
      //    floorOne: this.floorOne.nativeElement,
      //    floorTwo: this.floorTwo.nativeElement,
      //    header  : this.header.nativeElement,
      //    callBack : this.changeFloor,
      //    currentFloor : this.currentFloor
      //   }
    );
    popover.present({
      ev: ev
    });
  }

}

@Component({
  template: `
    <ion-list  class="popover-page">
    <ion-list-header>Select Floor Plan</ion-list-header>
      <ion-row *ngFor="let menu of menus">
        <ion-col>
        <a ion-item (click)="selectFloor(menu)">{{menu.header}}
        </a>
        </ion-col>
      </ion-row>
    </ion-list>
  `
})
export class PopoverPage {
  floorOne: any;
  floorTwo: any;
  header: any;
  callback: any;
  currentFloor: any;
  menus: Array<{ floorNo: number, header: string }>;
  constructor(public navParams: NavParams,
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public floorService: FloorService) {

    this.menus = [
      {
        floorNo: 1,
        header: 'Main Dinning Room'
      },
      {
        floorNo: 2,
        header: 'Other Room'
      }
    ];

  }

  ngOnInit() {
    // if (this.navParams.data) {
    //     this.floorOne = this.navParams.data.floorOne;
    //     this.floorTwo = this.navParams.data.floorTwo;
    //     this.header = this.navParams.data.header;
    //     this.callback = this.navParams.data.callBack;
    //     this.currentFloor = this.navParams.data.currentFloor;
    // }
  }
  selectFloor(floor) {
    this.close();
    //  this.callback(floor);
    // this.currentFloor = floor;
    this.close();
    localStorage.setItem('currentFloor',JSON.stringify(floor));
    //  this.hideFloors();
    this.floorService.selectFloor(floor);
    // if(floor == 1 ){
    //   this.floorOne.style.display = "block";
    //   this.header.innerHTML ="Main Dinning Room";
    // }else{
    //   this.floorTwo.style.display = "block";
    //   this.header.innerText ="Other Room";
    // }
  }
  close() {
    this.viewCtrl.dismiss();
  }
  // hideFloors(){
  //       this.floorOne.style.display = "none";
  //       this.floorTwo.style.display = "none"
  // }
}
