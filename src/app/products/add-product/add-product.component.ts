import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {


  constructor(private fb: FormBuilder, private ps: ProductService, private router: Router) { }


  addProductForm = this.fb.group({
    id: [''],
    productName: [''],
    categoryId: [''],
    description: [''],
    price: [''],
    is_available: [''],
    productImg: [''],
    rating: [''],
    reviews: [''],
    manufacturer: ['']
  })



  ngOnInit(): void {

  }
  addProduct() {
    let pdata = {
      id: this.addProductForm.value.id,
      productName: this.addProductForm.value.productName,
      categoryId: this.addProductForm.value.categoryId,
      description: this.addProductForm.value.description,
      price: this.addProductForm.value.price,
      is_available: this.addProductForm.value.is_available,
      productImg: this.addProductForm.value.productImg,
      rating: this.addProductForm.value.rating,
      reviews: this.addProductForm.value.reviews,
      manufacturer: this.addProductForm.value.manufacturer
    }
    this.ps.addNewProduct(pdata).subscribe((item: any) => {
      alert("new product added")
      this.router.navigateByUrl("products")
    })
  }
}
