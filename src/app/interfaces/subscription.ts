export interface Subscription
{
SubscriptionId: number;
SubscriptionName: string;
SubPrice: number;
}

export interface ChangeSubscription{
    subscriptionName: string;
    userId: number;
}