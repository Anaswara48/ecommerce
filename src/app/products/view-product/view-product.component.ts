import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent {
pid:any
pdata:any
  constructor(private ar:ActivatedRoute, private ps:ProductService){}

  ngOnInit():void{
this.ar.params.subscribe((data:any)=>{
  // console.log(data["id"]);
  this.pid=data["id"]
  
})

this.ps.viewProduct(this.pid).subscribe((item:any)=>{
// console.log(item);
this.pdata=item

})
  }
}
