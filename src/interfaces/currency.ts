import { User } from "./user";

export interface currency
{
    CurrencyId: number;
    CurrencyName: string;
    CurrencySymbol: string;
    CurrencyValue: number;
    User?:User;
    UserId:number;
}

export interface currencyConversion
{
    CurrencySymbol: string;
    CurrencyValue: number;
    ConvertedValue: number;
}