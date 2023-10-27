import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/models/iproduct';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product: IProduct ={
    id:0,
    name:'',
    description:'',
    quantity:0,
    price:0
  }
productId:number = 0;
  constructor(private prodService:ProductsService,private activatedRoute:ActivatedRoute , private router:Router){}

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.params['id'];

    if(this.productId != 0){
      let prod = this.prodService.getById(this.productId) ;
      if(prod) this.product = prod;
    }

  }

  GetData(e:Event){
    e.preventDefault();

    console.log(this.product);
    if(this.productId){
      // edit
      this.prodService.edit(this.productId,this.product);
    }else{
      //add
      this.prodService.add(this.product);
    }

    // go to another page
    this.router.navigate(['/products']);
  }
}
