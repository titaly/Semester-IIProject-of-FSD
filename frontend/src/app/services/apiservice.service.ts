import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  form: any;
  initializeFormGroup() {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }
  // connect frontend to backend
  apiUrl = 'http://3.0.54.128:3000/allbooks/';


  // get all data 
  getAllBooks(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  // create data 
  createBook(data:any): Observable<any> {
    console.log(data, 'createApi=>');

    return this.http.post(`${this.apiUrl}`, data);
  }

  // delete data 
  delBook(id:any): Observable<any> {
    let selectedID = id;
    return this.http.delete(`${this.apiUrl}${selectedID}`)
  }


  // update data
  updateBook(data:any, id:any): Observable<any> {
    let selectedID = id;
    return this.http.put(`${this.apiUrl}${selectedID}`, data);
  }

  // get single data
  getsingleBook(id:any): Observable<any> {
    let ids = id;
    return this.http.get(`${this.apiUrl}${ids}`);
  }
}
