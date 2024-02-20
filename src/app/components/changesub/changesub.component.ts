import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeSubscription } from 'src/app/interfaces/subscription';
import { SubscriptionService } from 'src/app/services/subscription.service';

@Component({
  selector: 'app-changesub',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './changesub.component.html',
  styleUrls: ['./changesub.component.scss']
})
export class ChangesubComponent {

}
