import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  {path: '*', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  {path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  {path: 'product-list', loadChildren: () => import('./product-list/product-list.module').then(m => m.ProductListModule)},
  {path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule)},
  {path: 'checkout', loadChildren: () => import('./checkout/checkout.module').then(m => m.CheckoutModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
