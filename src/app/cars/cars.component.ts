import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CARS } from '../mockCars';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  cars = CARS;
  selectedCar: any;
  
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const routeId = this.route.snapshot.params['id'];
    console.log(this.route);
    
    this.route.params.subscribe(path => {
      console.log(path);
      this.selectedCar = this.cars.find(item => item.id == path['id'])
    })
  }
}
