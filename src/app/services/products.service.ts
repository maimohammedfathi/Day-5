import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';
import { productsList } from '../models/productsList';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products : IProduct[];
  constructor() {
    this.products = productsList
  }

  getAll():IProduct[]{
    return this.products;
  }

  getById(id:number):IProduct|undefined{
    return this.products.find((prod)=>prod.id == id);
  }

  add(prod:IProduct):void{
    let nextId = productsList[productsList.length-1].id +1;
    prod.id = nextId;
    this.products.push(prod);
  }

  edit(id:number,prod:IProduct):void{
    let index=this.products.findIndex((p)=> p.id==id);
    if (index != -1){
      this.products[index].name = prod.name;
      this.products[index].description = prod.description;
      this.products[index].price = prod.price;
      this.products[index].quantity = prod.quantity;  
    } 
  }

  delete(id:number):void{
    let index=this.products.findIndex((p)=> p.id==id);
    if (index != -1){
      this.products.splice(index,1)
    }
  }
}
