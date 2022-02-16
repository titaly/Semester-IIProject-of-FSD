import { Component, OnInit, ViewChild } from '@angular/core';
import {ApiserviceService} from 'src/app/services/apiservice.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {MatSort} from '@angular/material/sort'
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog'
import { PopUpAddComponent } from '../pop-up-add/pop-up-add.component';


export interface PeriodicElement {
  id: number;
  title: string;
  authorweight: string;
  category: string;
}


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {
  paramid: any;
  getparamid: any;

  constructor(private service:ApiserviceService,
     private router: Router,
     private dialog: MatDialog,
     private route: ActivatedRoute,
     ) { }
  
  loggedout(){
    if (confirm('Are you sure you want to log out?')){
      this.router.navigate(['/']);
    }
  }

  onAdd(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "20%";
    let dialogRef = this.dialog.open(PopUpAddComponent, dialogConfig);
    dialogRef.afterClosed();
  }


  allBooks:any;
  displayedColumns: string[] = ['id', 'title', 'author', 'category', 'actions'];
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  
  
  ngOnInit():void {

    this.service.getAllBooks().subscribe((res) => {
    console.log(res, "res==>");
    this.allBooks = res.data;
    this.allBooks = new MatTableDataSource(this.allBooks);
    this.allBooks.sort = this.sort;
    this.allBooks.paginator = this.paginator;
    });

  }

  searchKey!: string;
  onSearchClear(){
    this.searchKey ="";
    this.applyFilter();
  }

  applyFilter(){
    this.allBooks.filter = this.searchKey.trim().toLowerCase();
  }



  userForm = new FormGroup({
    'id': new FormControl('', Validators.required),
    'title': new FormControl('', Validators.required),
    'author': new FormControl('', Validators.required),
    'category': new FormControl('', Validators.required),
  });

  
  msg: any;
 

  deleteBook(id:any){
    console.log(id, 'deleteID ==>')
    this.service.delBook(id).subscribe((res) => {
      if (confirm("Are you sure you want to delete this record?")){
        console.log(res, 'deleteRes =>')
        this.msg = res.message;
        this.ngOnInit();
      }
    })
  }

  updateBook(){
    this.onAdd()
  }
  
}


