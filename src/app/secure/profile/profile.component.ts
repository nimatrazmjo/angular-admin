import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Emitters } from '../../emitters/emitters';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profileInfo!: FormGroup;
  passwordInfo!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.profileInfo = this.formBuilder.group({
      first_name: '',
      last_name: '',
      email: '',
    });

    this.passwordInfo = this.formBuilder.group({
      password: '',
      confirm_password: '',
    });

    this.authService.currentUser().subscribe({
      next: user => this.profileInfo.patchValue(user)
    })
  }

  updateProfile(): void {
    this.authService.updateProfile(this.profileInfo.getRawValue()).subscribe({
      next: (result) => Emitters.authEmitter.emit(result),
      error: (err) =>  Emitters.authEmitter.emit(null),
    });
  }

  changePassword(): void {
    this.authService.changePassword(this.passwordInfo.getRawValue()).subscribe({
      next: (result) => console.log(result),
      error: (err) => console.error(err),
    });
  }
}
