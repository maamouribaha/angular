import { Component } from '@angular/core';
import { CommonService } from '../core/services/common.service';
import { Product } from '../core/models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  constructor(private cs:CommonService){}
classe="4SE2";
ph="taper votre username";
ph1="taper votre pwd";

userName="";
pwd="";

Product:Product[]=[
  {id:1,productName:"souris","price":50},
  {id:2,productName:"ecran","price":250},
  {id:3,productName:"clavier","price":50},
]

ngOnInit(){
  console.log(this.cs.getSomeValueOf(this.Product,"productName","ecran"));
}

confirmLogin(){
  return confirm("vous etes bien logger!!!!")
}

}
