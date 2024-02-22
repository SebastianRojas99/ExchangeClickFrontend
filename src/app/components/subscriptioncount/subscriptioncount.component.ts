import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SC } from 'src/app/interfaces/user';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-subscriptioncount',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subscriptioncount.component.html',
  styleUrls: ['./subscriptioncount.component.scss']
})
export class SubscriptioncountComponent {
  profileService = inject(ProfileService);
  activatedRoute = inject(ActivatedRoute);
  cd = inject(ChangeDetectorRef);
  router = inject(Router);
  user:SC = {
  userId:0,
  subCount:0
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.profileService.getSub().then(res => {
        if(res) this.user.subCount = res;
        this.cd.detectChanges();
      });
      });
  }
}