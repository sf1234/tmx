import { Component, ViewChild } from '@angular/core';
import {CORE_DIRECTIVES} from 'angular2/common';
//import { dataService } from '../providers/data ';

@Component({
  selector: 'waitlist-page',
//  viewProviders: [],
  templateUrl: 'waitlist.componenet.html',
  styleUrls: ['./components/app/app.css'],
//  encapsulation: ViewEncapsulation.None,
//  directives: [CORE_DIRECTIVES]
})

export class WaitList   {

    //Make sure you bootstrap your service at startup
   // constructor(public dataService: dataService) { }
    constructor() { }

    ngOnInit() { console.log('ngOnInit'); }
    ngOnDestroy() { console.log('ngOnDestroy'); }
}