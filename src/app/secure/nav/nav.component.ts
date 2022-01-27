import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  user!: User;
  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.auth.currentUser().subscribe({
      next: (user) => (this.user = user),
      error: (err) => console.log(err),
    });
  }

  logout(): void {
    console.log('hereeee');

    this.auth.logout().subscribe({ next: (res) => console.log(res) });
  }
}
