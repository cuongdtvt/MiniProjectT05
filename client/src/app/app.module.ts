import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FlxUiDatatableModule , FlxUiDataTable } from 'flx-ui-datatable'

import { CreateProductComponent } from './create-product/create-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UpdateProductComponent } from './update-product/update-product.component';

import { CreateCategoryComponent } from './create-category/create-category.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';

import { CreateImportsComponent } from './create-imports/create-imports.component';
import { ImportsDetailsComponent } from './imports-details/imports-details.component';
import { ImportsListComponent } from './imports-list/imports-list.component';
import { UpdateImportsComponent } from './update-imports/update-imports.component';

import { CreateExportsComponent } from './create-exports/create-exports.component';
import { ExportsDetailsComponent } from './exports-details/exports-details.component';
import { ExportsListComponent } from './exports-list/exports-list.component';
import { UpdateExportsComponent } from './update-exports/update-exports.component';

@NgModule({
  declarations: [
    AppComponent,
    
    CreateProductComponent,
    ProductDetailsComponent,
    ProductListComponent,
    UpdateProductComponent,

    CreateCategoryComponent,
    CategoryDetailsComponent,
    CategoryListComponent,
    UpdateCategoryComponent,
   
    CreateImportsComponent,
    ImportsDetailsComponent,
    ImportsListComponent,
    UpdateImportsComponent,
    CreateExportsComponent,
    ExportsDetailsComponent,
    ExportsListComponent,
    UpdateExportsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FlxUiDatatableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
