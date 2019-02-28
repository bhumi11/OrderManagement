/**
 * @author: Bhumi Desai
 * @description: In this component file, title value is given and logout is performed
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Order Management System';
  constructor(private myRoute: Router) { }

  ngOnInit() {
  }

  userLogout() {
    this.myRoute.navigate(['login']);
  }
}
