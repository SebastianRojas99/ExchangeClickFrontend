import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Profile } from 'src/app/interfaces/user';

@Component({
  selector: 'app-profile-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-icon.component.html',
  styleUrls: ['./profile-icon.component.scss']
})
export class ProfileIconComponent {
  @Input() user!:Profile;
}

