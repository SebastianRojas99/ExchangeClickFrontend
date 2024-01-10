import { Component,Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Profile } from 'src/app/interfaces/user';
import { ProfileIconComponent } from "../profile-icon/profile-icon.component";

@Component({
    selector: 'app-sidebar',
    standalone: true,
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    imports: [CommonModule, RouterModule, ProfileIconComponent]
})
export class SidebarComponent {
}
