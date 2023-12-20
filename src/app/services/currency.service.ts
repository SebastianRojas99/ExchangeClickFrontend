import { Injectable, inject } from '@angular/core';
import { Currency } from '../interfaces/currency';
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

}