import { Subscription } from "./subscription";

export interface RegisterData extends User {
    Password: string,
}
export interface ProfileCreationData extends Profile{
    password:string,
}

export interface User
{
    Name: string,
    LastName: string,
    Email:string,
    Username: string,
    SubscriptionId: number,
    SubCount:number,
    Role:string|number,
}

export interface LoginData {
    Email: string,
    Password: string
}
export interface SC{
    userId:number,
    subCount:number
}
export interface Profile{
    userId:number,
    name:string,
    lastName:string,
    email:string,
    username:string,
    role:string,
    subscriptionId:number,
    subscriptionName:string,
    subCount:number,
}
