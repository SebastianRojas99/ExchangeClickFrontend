import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profile } from 'src/app/interfaces/user';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileService = inject(ProfileService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  user: Profile = {
    userId: 0,
    name: '',
    lastName: '',
    email: '',
    username: '',
    role: '',
    subscriptionId: 0,
    subscriptionName: '',
    subCount: 0,
  };

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
       // Utiliza el objeto params directamente
      this.profileService.getProfile().then(res => {
        console.log('Profile data from service:', res);
        if (res) {
          this.user = res;
        }
      });
    });
  }
}