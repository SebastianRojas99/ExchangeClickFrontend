import { Injectable,inject } from "@angular/core"
import { ApiService } from "./api.service"
import { API } from "../constants/api";
import { ChangeSubscription } from "../interfaces/subscription";

@Injectable({
    providedIn: 'root'
})

export class SubscriptionService extends ApiService
{
    async update(subscription: ChangeSubscription):Promise<boolean> {
        console.log(subscription);
        if (!subscription.userId) return false;
        const res = await fetch(API + "User?userId="+subscription.userId, {
            method: 'PUT',
            headers: {
                "Content-type": "application/json",
                Authorization: "Bearer " + this.auth.token()
            },
            body: JSON.stringify(subscription)
        }); 
        return res.ok;
}
}
