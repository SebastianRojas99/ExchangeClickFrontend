import { Component, ElementRef, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { Profile } from 'src/app/interfaces/user';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends ApiService {
  router = inject(Router);
  cd = inject(ChangeDetectorRef);
    logout(){
      this.auth.logout();
      this.cd.detectChanges();
    }

    
    isLoginOrRegister() {
      const url = this.router.url;
      return url.includes('/login') || url.includes('/register');
    }

  }
