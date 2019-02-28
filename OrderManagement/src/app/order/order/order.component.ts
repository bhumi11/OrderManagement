/**
 * @author: Bhumi Desai
 * @description: In this component file, the logic of insert, update ands delete is performed
 * This is the parent component
 */
import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../core/services/order.service';
import { Order } from '../../core/order.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orders: Order[] = [];
  orderId: number;
  orderDetails: FormGroup;
  constructor(private orderService: OrderService, private fb: FormBuilder) { }


  /**
   * on init: getAllOrder method is called, to display the record when this particular component is loaded.
   */
  ngOnInit() {
    this.getAllOrder();

    this.orderDetails = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required],
    });
  }


  /**
   * Gets all list of orders
   */
  getAllOrder() {
    this.orderService.getAllOrder().subscribe((response) => {
      console.log('get all order', response);
      this.orders = response;
    });
  }


  /**
   * Clears all the input text box after the records insertd or deleted.
   * And also sets orderid to null
   */
  clearAll() {
    this.orderDetails.reset();
    this.orderId = null;
  }


  /**
   * Deletes the particular record
   * @param orderId: id of the record to be deleted
   */
  deleteOrder(orderId: number) {
    console.log('delete id', orderId);
    this.orderService.deleteOrder(orderId).subscribe((response) => {
      this.getAllOrder();
    });
  }


  /**
   * this method sets the value of the particular record into the input text box
   * @param order: all the data of the particular record to update
   */
  updateOrder(order: Order) {
    this.orderId = order.id;
    console.log('in update parent', order);
    console.log('id', this.orderId);

    this.orderDetails.controls['name'].setValue(order.name);
    this.orderDetails.controls['price'].setValue(order.price);
    this.orderDetails.controls['quantity'].setValue(order.quantity);
  }



  /**
   * This method updates the record if it gets orderId, and if it does not get id, it inserts data.
   * which means that, if id is not passed, insertion is performed, and if id is passed, updation is performed.
   */
  onSubmit() {
    if (this.orderId) {
      this.orderService.updateOrder(this.orderDetails.value, this.orderId).subscribe((response) => {
        console.log('updated records', response);
        this.getAllOrder();
        this.clearAll();
      });
    } else {
      console.log('inserted value', this.orderDetails.value);
      this.orderService.insertOrder(this.orderDetails.value).subscribe((response) => {
        console.log('inserted records', response);
        this.getAllOrder();
        this.clearAll();
      });
    }

  }
}
