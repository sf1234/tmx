import { Component , Input } from '@angular/core';

@Component({
  selector: 'page-floor-one',
  templateUrl: 'floor-one.html'
})
export class FloorOnePage {

  constructor() {}

    @Input() fillColor: string;
}
