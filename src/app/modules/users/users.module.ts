import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersRoutingModule } from './users-routing.module';
import { UserComponent } from './user/user.component';
import { AnimateComponent } from 'src/app/components/animate/animate.component';




@NgModule({
  declarations: [
    UserComponent,
    AnimateComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
