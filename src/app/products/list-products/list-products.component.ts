import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-list-products',
  standalone: true,
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
  imports: [CommonModule, FormsModule],
  providers: [ProductsService]
})
export class ListProductsComponent implements OnInit{
  @Input() products: any[] = [];
  @Output() productUpdated = new EventEmitter<void>();

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.products.forEach(product => {
      product.newQuantity = null; 
    });
  }

  inProductQuantity(productId: string, quantity: number) {
    if (quantity < 0) {
      alert('Cantidad no puede ser negativa.');
      return;
    }
    this.productsService.updateProductQuantity(productId, quantity).subscribe(() => {
      this.productUpdated.emit();
    });
  }

  outProductQuantity(productId: string, quantity: number) {
    if (quantity < 0) {
      alert('Cantidad no puede ser negativa.');
      return;
    }
    this.productsService.updateProductQuantity(productId, -quantity).subscribe(() => {
      this.productUpdated.emit();
    });
  }

  isQuantityValid(product: any): boolean {
    return product.newQuantity > 0 && product.newQuantity <= product.quantity;
  }
}
