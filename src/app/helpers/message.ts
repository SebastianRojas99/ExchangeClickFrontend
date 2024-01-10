import { Title } from "@angular/platform-browser";
import Swal from "sweetalert2";

export function generarMensajeError(title:string){
    Swal.fire({
        title: 'Error',
        text: title,
        icon: 'error',
        showConfirmButton: false,
        toast: true,
        position: 'bottom'
      })

}

export function generarMensajeExito(textoMensaje:string){
    Swal.fire({
        title: textoMensaje,
        icon: 'success',
        timer: 1500,
        showConfirmButton: false,
        toast: true,
        position: 'bottom'
      })
}