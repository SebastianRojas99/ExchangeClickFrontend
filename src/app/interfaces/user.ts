import { Subscription } from "./subscription";

export interface RegisterData extends User {
    Password: string,
}

export interface User
{
    Email:string,
    Username: string,
    Name: string,
    LastName: string,
}
export interface UserForCreation{
    Email:string,
    Username: string,
    Name: string,
    LastName: string,
    Password:string,
    Subscription:Subscription;
}

export interface LoginData {
    Email: string,
    Password: string
}
export interface SC{
    userId:number,
    subCount:number
}