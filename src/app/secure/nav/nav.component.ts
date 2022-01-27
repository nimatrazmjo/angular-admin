import { Component, OnInit } from '@angular/core';
import { Emitters } from '../../emitters/emitters';
import { User } from '../../interfaces/user.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  user!: User | null;
  constructor(private auth: AuthService) {}

  ngOnInit(): void {
      Emitters.authEmitter.subscribe(user => (this.user = user))
  }

  logout(): void {
    this.auth.logout().subscribe({ next: (res) => console.log(res) });
  }
}
