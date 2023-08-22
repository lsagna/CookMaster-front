import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { MaterialModule } from 'src/app/material.module';



@NgModule({
  declarations: [
    ShopComponent
  ],
  imports: [
    CommonModule,
	MaterialModule
  ]
})
export class ShopModule { }
