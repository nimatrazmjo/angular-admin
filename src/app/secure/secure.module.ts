import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecureComponent } from './secure.component';
import { NavComponent } from './nav/nav.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SecureComponent,
    NavComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SecureModule { }