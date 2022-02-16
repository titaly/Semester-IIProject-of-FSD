import { Injectable } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class FormGroupService {
  createBook(value: any) {
    throw new Error('Method not implemented.');
  }
  insert(value: any) {
    throw new Error('Method not implemented.');
  }
  initializeFormGroup() {
    throw new Error('Method not implemented.');
  }
  close() {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    id: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required)

  });
}
