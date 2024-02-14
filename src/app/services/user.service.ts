import { Injectable, inject } from '@angular/core';
import { Currency } from '../interfaces/currency';
import { API } from '../constants/api';
import { ApiService } from './api.service';
import { Profile, ProfileCreationData, User } from '../interfaces/user';
@Injectable({
    providedIn: 'root',
})

export class UserService extends ApiService{

    async getUsers(): Promise<Profile[]> {
        const res = await this.getAuth("User");
        const resJson = await res.json();
        return resJson;
    }
    async getById(userId:number| string): Promise<ProfileCreationData|undefined> {
        const res = await this.getAuth("User/GetUserById/"+userId);
        const resJson = await res.json();
        console.log(resJson);
        return resJson;
    }
    async create(user:ProfileCreationData):Promise<boolean>{
        if(user.userId) return false;
        const res = await fetch(API+'User/userCreation',{
        method:'POST',
        headers:{
            "Content-type":"application/json",
        Authorization: "Bearer "+this.auth.token()
        },
        body: JSON.stringify(user)
        })
        return res.ok
    };
    async update(user: ProfileCreationData): Promise<boolean> {
        if (!user.userId) return false;
        const res = await fetch(API + "User?userId=" + user.userId, {
            method: 'PUT',
            headers: {
                "Content-type": "application/json",
                Authorization: "Bearer " + this.auth.token()
            },
            body: JSON.stringify(user)
        });
        if (res.ok) {
            // La solicitud fue exitosa
            return true;
        } else if (res.status === 404) {
            // El usuario no se encontró en la base de datos
            return false;
        } else {
            // Manejar otros casos de error
            // Por ejemplo, puedes lanzar una excepción o realizar alguna acción específica
            throw new Error("Error al actualizar el usuario");
        }
    }

    async delete(userId:number):Promise<boolean>{
        const res = await fetch(API+'User?userId='+userId,{
        method:'DELETE',
        headers:{
            "Content-type":"application/json",
            Authorization: "Bearer "+this.auth.token()
        },
        })
        return res.ok
    };
}