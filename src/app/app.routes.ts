import { Routes } from '@angular/router';
import { ProductsPageComponent } from './products/products-page.component';

export const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductsPageComponent }
];

//@NgModule({
//  imports: [RouterModule.forRoot(routes)],
//  exports: [RouterModule]
//})
export class AppRoutingModule {}
