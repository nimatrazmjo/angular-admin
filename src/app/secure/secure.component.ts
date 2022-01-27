import { Component, OnInit } from '@angular/core';
import { Emitters } from '../emitters/emitters';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css']
})
export class SecureComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.currentUser().subscribe({
      next: (user) => Emitters.authEmitter.emit(user),
      error: (err) => Emitters.authEmitter.emit(null),
    });
  }

}
