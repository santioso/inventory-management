import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CreateProductComponent } from './create-products/create-products.component';
import { SearchProductComponent } from './search-products/search-products.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products-page',
  standalone: true,
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css'],
  imports: [CommonModule, FormsModule, CreateProductComponent, SearchProductComponent, ListProductsComponent],
  providers: [ProductsService]
})
export class ProductsPageComponent implements OnInit {
  products: any[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    console.log('first')
    this.productsService.getAllProducts().subscribe(data => {
      this.products = data;
    });
  }

  updateProductList(products: any[]) {
    this.products = products;
  }
}
