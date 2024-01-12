import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

export interface Car {
  make: string;
  model: string;
  year: number;
  miles: number;
  price: number;
}

@Component({
  standalone: true,
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss'],
  imports: [CommonModule, NgFor],
})
export class CarsListComponent implements OnInit {
  cars: Car[] = [
    {
      make: 'Honda',
      model: 'Civic Type-R',
      year: 2023,
      miles: 5000,
      price: 30000,
    },
    {
      make: 'Toyota',
      model: 'Camry',
      year: 2010,
      miles: 120000,
      price: 12000,
    },
    {
      make: 'Mazda',
      model: '3-speed',
      year: 2010,
      miles: 80000,
      price: 12200,
    },
    {
      make: 'BMW',
      model: 'Z4',
      year: 2024,
      miles: 0,
      price: 51000,
    },
    {
      make: 'Nissan',
      model: 'Skyline',
      year: 1998,
      miles: 23000,
      price: 120000,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
