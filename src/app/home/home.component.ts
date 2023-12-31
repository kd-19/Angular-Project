import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  list=faList;
  cart=faCartShopping;

  popularProducts:undefined | product[];
  trendyProducts: undefined | product[];
  limit=3;

  constructor(private product:ProductService){}

  ngOnInit(): void {
    this.product.popularProducts(this.limit).subscribe((data)=>{
      this.popularProducts=data;
    });

    this.product.trendyProducts().subscribe((result)=>{
      this.trendyProducts=result;
    })

  }
}
