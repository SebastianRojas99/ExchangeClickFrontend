import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from 'src/app/services/user.service';
import { SC } from 'src/app/interfaces/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-subscriptioncount',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subscriptioncount.component.html',
  styleUrls: ['./subscriptioncount.component.scss']
})
export class SubscriptioncountComponent {
  userService = inject(UserService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  user:SC = {
  userId:0,
  subCount:0
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.userService.getSub().then(res => {
        if(res) this.user.subCount = res;
      });
      });
  }
}