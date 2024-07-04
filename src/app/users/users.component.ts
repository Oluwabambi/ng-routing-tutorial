import { Component } from '@angular/core';
import { CARS } from '../mockCars';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  cars = CARS;
}
