import {
    Injectable,
    Signal,
    WritableSignal,
    inject,
    signal,
} from '@angular/core';
import { API } from '../constants/api';
import { LoginData,ProfileCreationData,RegisterData } from 'src/app/interfaces/user';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor() {
    this.token.set(localStorage.getItem('token'));
    }
    router = inject(Router);
    token: WritableSignal<string | null> = signal(null);

    async login(loginData: LoginData) {
    try {
        const res = await fetch(API + 'Auth/authenticate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
        });
        if (!res.ok) return false;
        const tokenRecibido = await res.text();
        localStorage.setItem('token', tokenRecibido);
        this.token.set(tokenRecibido);
        return true;
    } catch {
        return false;
    }
    }

    async register(user: ProfileCreationData) {
    const res = await fetch(API + 'User', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });
    console.log('REGISTRANDO', res);
    return res;
    }

    logout() {
    this.token.set(null);
    localStorage.removeItem('token');
    this.router.navigate(['/']);
    }
}