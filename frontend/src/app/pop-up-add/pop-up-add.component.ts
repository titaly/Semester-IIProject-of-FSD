import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormGroupService } from 'src/app/services/form-group.service';
import { ApiserviceService } from '../services/apiservice.service';
import {MatDialogRef} from '@angular/material/dialog'
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-pop-up-add',
  templateUrl: './pop-up-add.component.html',
  styleUrls: ['./pop-up-add.component.css']
})
export class PopUpAddComponent implements OnInit {
  allBooks: any;
  
  constructor(public service:ApiserviceService, 
    public dialogRef:MatDialogRef<PopUpAddComponent>,
    ) { }

  ngOnInit(): void {
    this.service.getAllBooks().subscribe((res) => {
      this.allBooks = res.data;
    });
  }


  userForm = new FormGroup({
    'id': new FormControl('', Validators.required),
    'title': new FormControl('', Validators.required),
    'author': new FormControl('', Validators.required),
    'category': new FormControl('', Validators.required),
  });

  onCancel() {
    this.userForm.reset();
  }


  msg: any;
  createBook(){
    if (this.userForm.valid){
      console.log(this.userForm.value);
      this.service.createBook(this.userForm.value).subscribe((res) => {
        console.log(res, 'res==>');
        this.userForm.reset();
        this.dialogRef.close();
        this.msg = res.message;
        window.location.reload();

      })

  }
  
  }
}



