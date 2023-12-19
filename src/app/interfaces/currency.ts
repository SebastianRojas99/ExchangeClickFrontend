import { User } from "./user";

export interface Currency
{
    CurrencyId: number;
    CurrencyName: string;
    CurrencySymbol: string;
    CurrencyValue: number;
}

export interface c2
{
    CurrencyId: number;
    CurrencyName: string;
    CurrencySymbol: string;
    CurrencyValue: number;
    User?:User;
    UserId:number;
}
