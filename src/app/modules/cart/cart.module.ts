import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { MaterialModule } from 'src/app/material.module';



@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
	MaterialModule
  ]
})
export class CartModule { }
