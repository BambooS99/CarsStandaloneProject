import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit, WritableSignal, signal } from '@angular/core';
export interface UserData {
  Balance: WritableSignal<number>;
}


@Component({
  standalone: true,
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss'],
  imports: [CommonModule, NgFor],
})


export class UserDataComponent implements OnInit {
  
  userInfos: UserData[]=[{
    Balance: signal(20000) //line with error
  }]
  
  constructor() { }

  ngOnInit(): void {
  }

  getUserInfos(): UserData[] {
    return this.userInfos;
  }
}