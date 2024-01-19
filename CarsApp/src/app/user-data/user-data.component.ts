import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
export interface UserData {
  Balance: number;
}
let x = 5;

@Component({
  standalone: true,
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss'],
  imports: [CommonModule, NgFor],
})


export class UserDataComponent implements OnInit {
  userInfos: UserData[]=[{
    Balance: 15000
  }]
   
  
  constructor() { }

  ngOnInit(): void {
  }

  getUserInfos(): UserData[] {
    return this.userInfos;
  }
}