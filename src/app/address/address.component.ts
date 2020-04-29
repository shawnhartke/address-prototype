import { Component, Input, Output, ViewChild, EventEmitter, AfterViewInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: [ './address.component.css' ]
})
export class AddressComponent implements AfterViewInit {
 applicationFormControl = new FormControl('', [
    Validators.required
  ]);

  
    constructor() {
    }

    ngAfterViewInit() {
    }
}