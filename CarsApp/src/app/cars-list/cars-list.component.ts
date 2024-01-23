import { Component, OnInit, WritableSignal, signal} from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';



export interface Car {
  make: string;
  model: string;
  year: number;
  miles: number;
  price: number;
  image: string;
}





@Component({
  standalone: true,
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss'],
  imports: [CommonModule, NgFor],
})


export class CarsListComponent {
  

    Balance= signal(20000);

  
  purchase() {
   this.Balance.set(this.Balance() - 5)
  }
 

  cars: Car[] = [
    {
      make: 'Honda',
      model: 'Civic Type-R',
      year: 2023,
      miles: 5000,
      price: 30000,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Honda_Civic_TCR_2018_Genf.jpg/800px-Honda_Civic_TCR_2018_Genf.jpg'
    },
    {
      make: 'Toyota',
      model: 'Camry',
      year: 2010,
      miles: 120000,
      price: 12000,
      image: 'https://www.motortrend.com/uploads/sites/5/2010/03/2010-toyota-camry-le-front-three-quarters-driver-2.jpg?fit=around%7C875:492'

    },
    {
      make: 'Mazda',
      model: '3-speed',
      year: 2010,
      miles: 80000,
      price: 12200,
      image: 'https://www.motortrend.com/uploads/sites/5/2009/08/2010-mazdaspeed3-front-three-quarter-5.jpg'
    },
    {
      make: 'BMW',
      model: 'Z4',
      year: 2024,
      miles: 0,
      price: 51000,
      image: 'https://hips.hearstapps.com/hmg-prod/images/bmw-z4-m40i-sanfranciscoredmetallic-108-657717dad5dfe.jpg?crop=0.670xw:1.00xh;0.196xw,0&resize=640:*'
    },
    {
      make: 'Nissan',
      model: 'Skyline',
      year: 1998,
      miles: 23000,
      price: 120000,
      image: 'https://images.fitmentindustries.com/web-compressed/1444540-1-1998-skyline-r34-nissan-base-tein-coilovers-cosmis-racing-xt-206r-bronze.jpg'
    },
    {
      make: 'Ford',
      model: 'Fiesta',
      year: 1998,
      miles: 87000,
      price: 4000,
      image: 'https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_1080,q_auto:eco,w_1920/v1/cms/uploads/7YNwbJdzQyCbVNzlcRA3'

    },
    {
      make: 'Lexus',
      model: 'ES 300',
      year: 1998,
      miles: 63000,
      price: 16000,
      image: 'https://file.kelleybluebookimages.com/kbb/base/house/1998/1998-Lexus-LS-FrontSide_LELS4981_505x375.jpg?interpolation=high-quality&downsize=303:*'

    }
  ];

  
}
