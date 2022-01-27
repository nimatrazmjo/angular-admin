import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../public/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] =[]
  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.all().subscribe({next: users => this.users = users})
  }

}
