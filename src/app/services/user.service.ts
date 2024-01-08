import { Injectable, inject } from '@angular/core';
import { Currency } from '../interfaces/currency';
import { API } from '../constants/api';
import { ApiService } from './api.service';
import { Profile } from '../interfaces/user';
@Injectable({
    providedIn: 'root',
})

export class UserService extends ApiService{
    async getSub():Promise<number>{
        const res = await this.getAuth("User/${Id}")
        const resJson = await res.json();
        return resJson;
    };
    async getProfile(): Promise<Profile | undefined> {
        const res = await this.getAuth("User/Profile/${UserId}");
        const resJson = await res.json();
        console.log("API Response:", resJson);
        return resJson;
    }
}