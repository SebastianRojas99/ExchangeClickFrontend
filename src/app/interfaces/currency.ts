import { User } from "./user";

export interface Currency
{
    currencyId: number;
    currencyName: string;
    currencySymbol: string;
    currencyValue: number;
}
export interface CurrencyForCreation
{
    currencyId: number;
    currencyName: string;
    currencySymbol: string;
    currencyValue: number;
    userId:number;
}

export interface c2
{
    currencyId: number;
    currencyName: string;
    currencySymbol: string;
    currencyValue: number;
    User?:User;
    userId:number;
}

export interface ToConversion
{
    currencySymbol:string;
}

export interface FromConversion
{
    currencySymbol:string;
}
