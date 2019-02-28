import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Order } from '../../core/order.model';

/**
 * @author: Bhumi Desai
 * @description: In this component file, the data is passed to parent component using output and also get data from parent using input
 * This is the child component. And also works as a dumb component
 */
@Component({
  selector: 'app-manage-order',
  templateUrl: './manage-order.component.html',
  styleUrls: ['./manage-order.component.css']
})
export class ManageOrderComponent implements OnInit {

  @Input() orderData: Order[];
  @Output() deleteData = new EventEmitter<number>();
  @Output() updateData = new EventEmitter<Order>();
  constructor() { }

  ngOnInit() {
  }


  /**
   * deleteOrderData method emits the event, that is it sends the data to parent
   * @param event: here event is of type number
   */
  deleteOrderData(event) {
    this.deleteData.emit(event);
  }


  /**
 * updateOrderData method emits the event, that is it sends the data to parent
 * @param event: here event is of type Order
 */
  updateOrderData(event) {
    this.updateData.emit(event);
  }
}
