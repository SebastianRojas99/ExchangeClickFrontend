import { Component, Signal, WritableSignal, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileCreationData, RegisterData } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  authService = inject(AuthService)
  router = inject(Router);
  errorRegister: WritableSignal<boolean> = signal(false)
  cargando = signal(false);

  user: ProfileCreationData = {
    username: "",
    userId: 0,
    name: '',
    lastName: '',
    email: '',
    password: '',
    role: '',
    subscriptionId: 0,
    subscriptionName: '',
    subCount: 0
  }

  async register(){
    this.errorRegister.set(false);
    this.cargando.set(true);
    try{
      const res = await this.authService.register(this.user);
      if(res.ok) {
        this.router.navigate(["/login"])
      }
      else {
        this.errorRegister.set(true);
      }
    } catch(err) {
      console.warn('Error registrando', err)
    }
    this.cargando.set(false);
  }
}
