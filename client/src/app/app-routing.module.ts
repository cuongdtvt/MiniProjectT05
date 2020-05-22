
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CreateProductComponent } from './create-product/create-product.component';

import { CategoryListComponent } from './category-list/category-list.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { CreateCategoryComponent } from './create-category/create-category.component';

import { ImportsListComponent } from './imports-list/imports-list.component';
import { UpdateImportsComponent } from './update-imports/update-imports.component';
import { ImportsDetailsComponent } from './imports-details/imports-details.component';
import { CreateImportsComponent } from './create-imports/create-imports.component';

import { ExportsListComponent } from './exports-list/exports-list.component';
import { UpdateExportsComponent } from './update-exports/update-exports.component';
import { ExportsDetailsComponent } from './exports-details/exports-details.component';
import { CreateExportsComponent } from './create-exports/create-exports.component';

const routes: Routes = [
  { path: '', redirectTo: 'product', pathMatch: 'full' },
  { path: 'products', component: ProductListComponent },
  { path: 'add', component: CreateProductComponent },
  { path: 'update/:id', component: UpdateProductComponent },
  { path: 'details/:id', component: ProductDetailsComponent },
 
  { path: 'categories', component: CategoryListComponent },
  { path: 'categories/add', component: CreateCategoryComponent },
  { path: 'categories/update/:id', component: UpdateCategoryComponent },
  { path: 'categories/details/:id', component: CategoryDetailsComponent },

  { path: 'imports', component: ImportsListComponent },
  { path: 'imports/add', component: CreateImportsComponent },
  { path: 'imports/update/:id', component: UpdateImportsComponent },
  { path: 'imports/details/:id', component: ImportsDetailsComponent },

  { path: 'exports', component: ExportsListComponent },
  { path: 'exports/add', component: CreateExportsComponent },
  { path: 'exports/update/:id', component: UpdateExportsComponent },
  { path: 'exports/details/:id', component: ExportsDetailsComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
