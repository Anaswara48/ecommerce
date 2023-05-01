import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import behaviour subject
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // create object 
  search = new BehaviorSubject("")

  constructor(private http: HttpClient) { }

  // api to view all
  viewAllProduct() {
    return this.http.get('http://localhost:3000/products')

  }

  // view single product
  viewProduct(pid: any) {
    return this.http.get('http://localhost:3000/products/' +pid)
  }

  // product delete
  deleteProduct(pid: any) {
    return this.http.delete('http://localhost:3000/products/' +pid)
  }

  addNewProduct(pdata: any) {
    return this.http.post('http://localhost:3000/products/',pdata)
  }

  //editProduct
  editProduct(pid:any,pdata:any){
return this.http.put('http://localhost:3000/products/' +pid,pdata)
  }



}