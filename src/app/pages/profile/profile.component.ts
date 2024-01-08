import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  UserService } from 'src/app/services/user.service';
import { Profile } from 'src/app/interfaces/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userService = inject(UserService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  user: Profile = {
    userId: 0,
    name: '',
    lastName: '',
    email: '',
    username: '',
    subscriptionId: 0,
    subscriptionName: '',
    subCount: 0,
  };

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
       // Utiliza el objeto params directamente
      this.userService.getProfile().then(res => {
        console.log('Profile data from service:', res);
        if (res) {
          this.user = res;
        }
      });
    });
  }
}