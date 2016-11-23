import { Injectable } from '@angular/core';
import { Platform }  from 'ionic-angular/index';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class FloorService {

  public getFloorObserver: any;
  public getFloor: any;

  constructor(private platform: Platform) {
    this.getFloorObserver = null;
     this.getFloor = Observable.create(observer => {
         this.getFloorObserver = observer;
     });
  }

  public selectFloor(floor : any) {
    this.getFloorObserver.next(floor);
  }

}
