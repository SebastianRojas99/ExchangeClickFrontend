import { Injectable, inject } from '@angular/core';
import { Currency, CurrencyForCreation } from '../interfaces/currency';
import { API } from '../constants/api';
import { ApiService } from './api.service';
@Injectable({
    providedIn: 'root',
})


export class CurrencyService extends ApiService{

    async getAll():Promise<Currency[]>{
        const res = await this.getAuth("Currency")
        const resJson = await res.json();
        return resJson;
    };
    async getById(currencyId:number | string):Promise<Currency | undefined>{
        const res = await this.getAuth('Currency/'+currencyId);
        const resJson = await res.json();
        return resJson;
    };
    async create(currency:CurrencyForCreation):Promise<boolean>{
        if(currency.currencyId) return false;
        const res = await fetch(API+'Currency/crear-nueva-moneda',{
        method:'POST',
        headers:{
            "Content-type":"application/json",
        Authorization: "Bearer "+this.auth.token()
        },
        body: JSON.stringify(currency)
        })
        return res.ok
    };
    async update(currency:CurrencyForCreation):Promise<boolean>{
        if(!currency.currencyId) return false;
        const res = await fetch(API+'Currency?currencyId='+currency.currencyId,{
        method:'PUT',
        headers:{
            "Content-type":"application/json",
            Authorization: "Bearer "+this.auth.token()
        },
        body: JSON.stringify(currency)
        })
        return res.ok
    };
    async delete(id:number):Promise<boolean>{
        const res = await fetch(API+'Currency?id='+id,{
        method:'DELETE',
        headers:{
            "Content-type":"application/json",
            Authorization: "Bearer "+this.auth.token()
        },
        })
        return res.ok
    };
}