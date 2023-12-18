import { Component, Signal, WritableSignal, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterData } from 'src/interfaces/user';
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

  RegisterData: RegisterData = {
    Username: "",
    Email:"",
    Name: "",
    LastName: "",
    Password: "",
  }

  async register(){
    this.errorRegister.set(false);
    this.cargando.set(true);
    try{
      const res = await this.authService.register(this.RegisterData);
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
