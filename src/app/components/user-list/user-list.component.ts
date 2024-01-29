import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Profile } from 'src/app/interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  router = inject(Router);
  @Input({required:true}) users!:Profile;
}
