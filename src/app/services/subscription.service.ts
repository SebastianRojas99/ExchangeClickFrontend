import { Injectable,inject } from "@angular/core"
import { ApiService } from "./api.service"
import { API } from "../constants/api";
import { ChangeSubscription } from "../interfaces/subscription";

@Injectable({
    providedIn: 'root'
})

export class SubscriptionService extends ApiService
{
    async updateSubscription(subscription: ChangeSubscription):Promise<boolean> {
        console.log(subscription);
        const res = await fetch(API + "User/UpdateSubscription/?userId="+subscription.userId, {
            method: 'PUT',
            headers: {
                "Content-type": "application/json",
                Authorization: "Bearer " + this.auth.token()
            },
            body: JSON.stringify(subscription.subscriptionName)
        }); 
        return res.ok;
}
}
