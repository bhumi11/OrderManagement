import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { HeaderComponent } from './header/header.component';
import { OrderService } from './services/order.service';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  providers: [OrderService]
})
export class CoreModule { }
