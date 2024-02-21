import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { generarMensajeExito } from 'src/app/helpers/message';
import { ChangeSubscription } from 'src/app/interfaces/subscription';
import { SubscriptionService } from 'src/app/services/subscription.service';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss']
})
export class SubscriptionsComponent {
  subscriptionService = inject(SubscriptionService);
  activatedRoute=inject(ActivatedRoute);
  router=inject(Router);
  
 freeSub: ChangeSubscription = {
    userId: 0,
    subscriptionName: 'Subscription Free',
  }
  trialSub: ChangeSubscription = {
    userId: 0,
    subscriptionName: 'Subscription Trial',
  }
  proSub: ChangeSubscription = {
    userId: 0,
    subscriptionName: 'Subscription Pro',
   
    
  }
  

  async freeSubscription(){
    const res = await this.subscriptionService.updateSubscription(this.freeSub);
    if(res){
      generarMensajeExito('Tu suscripción ha sido actualizada a Free')
    }
  }
  async trialSubscription(){
    const res = await this.subscriptionService.updateSubscription(this.trialSub);
    if(res){    
      generarMensajeExito('Tu suscripción ha sido actualizada a Trial')
    }
  }
  async proSubscription(){
    const res = await this.subscriptionService.updateSubscription(this.proSub);
    if(res){
      generarMensajeExito('Tu suscripción ha sido actualizada a Pro')
    }
  }
}
