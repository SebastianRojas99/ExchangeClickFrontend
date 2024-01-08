import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ProfileIconComponent } from 'src/app/components/profile-icon/profile-icon.component';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ProfileIconComponent
  ]
})
export class ProfileModule { }
