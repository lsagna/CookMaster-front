import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionComponent } from './subscription/subscription.component';
import { MaterialModule } from 'src/app/material.module';
import { SubscriptionManagementComponent } from './subscription-management/subscription-management.component';
import { UnsubscribeComponent } from './unsubscribe/unsubscribe.component';



@NgModule({
  declarations: [
    SubscriptionComponent,
    SubscriptionManagementComponent,
    UnsubscribeComponent,
  ],
  exports: [
	SubscriptionComponent
  ],
  imports: [
    CommonModule,
	MaterialModule
  ]
})
export class SharedModule { }
