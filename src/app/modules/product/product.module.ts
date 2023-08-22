import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { MaterialModule } from 'src/app/material.module';



@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
	MaterialModule
  ]
})
export class ProductModule { }
