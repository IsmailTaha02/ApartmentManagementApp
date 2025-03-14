import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../Services/api.service';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>User List</h2>
    <ul>
      <li *ngFor="let user of users">{{ user }}</li>
    </ul>
  `,
  styles: []
})
export class UserListComponent implements OnInit {

  users: string[] = [];

  constructor(private userService: ApiService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }
}