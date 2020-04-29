import {
  Component,
  OnInit
  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.css'],
})
export class GetStartedComponent implements OnInit {
  getStartedFormGroup: FormGroup;

  constructor(private formbuilder: FormBuilder) {
  }

  ngOnInit() {
      this.getStartedFormGroup = this.formbuilder.group({
      phoneOrEmail: ['', [Validators.required]]});
  }
}