import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order/order.component';
import { SharedModule } from '../shared/shared.module';
import { ManageOrderComponent } from './manage-order/manage-order.component';

@NgModule({
  imports: [
    SharedModule,
    OrderRoutingModule
  ],
  declarations: [OrderComponent, ManageOrderComponent]
})
export class OrderModule { }
