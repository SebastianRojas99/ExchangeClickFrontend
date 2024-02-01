import { Injectable, inject } from '@angular/core';
import { Currency } from '../interfaces/currency';
import { API } from '../constants/api';
import { ApiService } from './api.service';
import { Profile } from '../interfaces/user';
@Injectable({
    providedIn: 'root',
})

export class UserService extends ApiService{

    async getUsers(): Promise<Profile[]> {
        const res = await this.getAuth("User");
        const resJson = await res.json();
        return resJson;
    }
}