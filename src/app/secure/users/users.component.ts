import { MatPaginator } from '@angular/material/paginator';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import  { MatTableDataSource } from '@angular/material/table'

import { User } from '../../interfaces/user.interface';
import { UserService } from '../../public/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, AfterViewInit {

  users: User[] =[]
  dataSource = new MatTableDataSource()
  displayedColumns: string[] = ['ID','name', 'email', 'action'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.all().subscribe({next: users => this.dataSource.data = users})
  }

  ngAfterViewInit(): void {
      this.dataSource.paginator = this.paginator;
  }

}
