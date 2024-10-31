import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-create-product',
  standalone: true,
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.css'],
  imports: [CommonModule, FormsModule],
  providers: [ProductsService]
})
export class CreateProductComponent {
  @Output() productCreated = new EventEmitter<void>();
  newProduct = { name: '', quantity: 0, expirationDate: '' };

  constructor(private readonly productsService: ProductsService) {}

  createProduct() {
    if (this.newProduct.quantity < 0 || new Date(this.newProduct.expirationDate) < new Date()) {
      alert('Cantidad no puede ser negativa y la fecha de caducidad debe ser mayor a la fecha actual');
      return;
    }
    this.productsService.createProduct(this.newProduct).subscribe(() => {
      this.productCreated.emit();
      this.newProduct = { name: '', quantity: 0, expirationDate: '' };
    });
  }
}
