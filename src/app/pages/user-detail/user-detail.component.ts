import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { generarMensajeError } from 'src/app/helpers/message';
import { Profile, ProfileCreationData, User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {
  userService=inject(UserService);
  activatedRoute=inject(ActivatedRoute);
  router=inject(Router);
  user:Profile={
    userId: 0,
    name: '',
    lastName: '',
    email: '',
    username: '',
    role: '',
    subscriptionId: 0,
    subscriptionName: '',
    subCount: 0
  }
  userForCreation:ProfileCreationData={
    userId: 0,
    name: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    role: '',
    subscriptionId: 0,
    subscriptionName: '',
    subCount: 0,
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.userService.getById(params['userId']).then(res => {
        if(res) this.user = res;
      });
      });
  }
  borrarUsuario(){
    Swal.fire({
      title: 'Estas seguro de eliminar el usuario '+this.userForCreation.username+' '+'?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borrar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.delete(this.user.userId).then(res => {
          if(res){
            Swal.fire(
              'Borrado!',
              'tu usuario fue borrado.',
              'success'
            )
            this.router.navigate(['users']);
          }else{
            generarMensajeError('tu usuario no fue borrado.')
          }
        }
    )}
    })
  }
}

