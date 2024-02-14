import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Profile, ProfileCreationData, RegisterData, User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { FormsModule } from '@angular/forms';
import { generarMensajeError, generarMensajeExito } from 'src/app/helpers/message';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {
userService = inject(UserService);
@Output() cerrarModal = new EventEmitter();
@Input() userForCreation: ProfileCreationData = {
  userId: 0,
  name: '',
  lastName: '',
  email: '',
  password: '',
  username: '',
  role: '',
  subscriptionId: 0,
  subscriptionName: '',
  subCount: 0
}
async onSubmit(){
  (this.userForCreation.userId)?this.actualizarUsuario():this.agregarUsuario();
}
async actualizarUsuario() {
  const res = await this.userService.update(this.userForCreation);
  this.cerrarModal.emit();
  if(res){
    generarMensajeExito('Usuario editado')
  }else{
    this.cerrarModal.emit();
    generarMensajeError('Usuario no editado')
  }
}
async agregarUsuario() {
  const res = await this.userService.create(this.userForCreation);
  this.cerrarModal.emit();
  if(res){
    generarMensajeExito('Usuario agregado')
  }else{
    generarMensajeError('Usuario no agregado')
  }
}
}