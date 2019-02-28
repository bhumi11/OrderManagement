/**
 * @author: Bhumi Desai
 * @description: In this component file, the http methods of insert, update ands delete is performed
 * And the data comes from the json server
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Order } from '../order.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OrderService {

  baseUrl = 'http://localhost:3000/Orders';
  constructor(private http: HttpClient) { }


  /**
   * http get request is performed
   * @returns an observable of type Order[]
   */
  getAllOrder(): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseUrl);
  }


  /**
   * http post request is performed for insertion
   * @param order: body of the records to be inserted, and it is of type Order
   * @returns an observable with values to be inserted
   */
  insertOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.baseUrl, order);
  }


  /**
   * http put request is performed for updation
   * @param order: body of the records to be updated, and it is of type Order
   * @param id: id of the particular record to be updated
   * @returns an observable with values to be updated
   */
  updateOrder(order: Order, id: number) {
    return this.http.put<Order>(this.baseUrl + '/' + id, order);
  }


  /**
   * http delete request is performed for deletion
   * @param id: id of the particular record to be deleted
   */
  deleteOrder(id: number): Observable<Order> {
    return this.http.delete<Order>(this.baseUrl + '/' + id);
  }
}
