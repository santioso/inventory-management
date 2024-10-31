import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-search-product',
  standalone: true,
  templateUrl: './search-products.component.html',
  styleUrls: ['./search-products.component.css'],
  imports: [CommonModule, FormsModule],
  providers: [ProductsService]
})
export class SearchProductComponent {
  @Output() productsFound = new EventEmitter<any[]>();
  searchQuery = '';
  products: any[] = []; // Definir la propiedad products

  constructor(private productsService: ProductsService) {}

  searchProducts() {
    this.productsService.searchProducts(this.searchQuery).subscribe(data => {
      this.products = data; // Actualizar la propiedad products
      this.productsFound.emit(data);
    });
  }
}
