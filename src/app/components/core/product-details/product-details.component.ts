import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/models/iproduct';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productId:number =0;
  product:IProduct|undefined;

  constructor(private activatedRoute:ActivatedRoute,private prodService:ProductsService){}
  ngOnInit(): void {
    
    this.productId = this.activatedRoute.snapshot.params['id'];

    this.product = this.prodService.getById(this.productId);
  }
}
