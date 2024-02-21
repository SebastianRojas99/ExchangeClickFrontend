import { Component,Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Profile } from 'src/app/interfaces/user';
import { ProfileIconComponent } from "../profile-icon/profile-icon.component";
import { ProfileService } from 'src/app/services/profile.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    imports: [CommonModule, RouterModule, ProfileIconComponent]
})
export class SidebarComponent extends ApiService {
    router = inject(Router);
      logout(){
        this.auth.logout();
      }
  
    isAdmin: boolean = true;
    profileService = inject(ProfileService);

    async ngOnInit() {
        this.isAdmin = await this.profileService.isAdmin(); // Verifica si el usuario es administrador
    }
    async toRoute(route: string) {
        await this.router.navigate([route]);
    }
}
