import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CurrencyService } from 'src/app/services/currency.service';
import { Currency } from 'src/app/interfaces/currency';
import { generarMensajeError } from 'src/app/helpers/message';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-currency-detail',
  templateUrl: './currency-detail.component.html',
  styleUrls: ['./currency-detail.component.scss']
})
export class CurrencyDetailComponent {
  currencyService=inject(CurrencyService);
  activatedRoute=inject(ActivatedRoute);
  router=inject(Router);
  currency:Currency={
    currencyId:0,
    currencyName:"",
    currencySymbol:"",
    currencyValue:0,
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.currencyService.getById(params['currencyId']).then(res => {
        if(res) this.currency = res;
      });
      });
  }
  borrarMoneda(){
    Swal.fire({
      title: 'Estas seguro de eliminar la moneda '+this.currency.currencyName+' '+'?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borrar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.currencyService.delete(this.currency.currencyId).then(res => {
          if(res){
            Swal.fire(
              'Borrado!',
              'tu moneda fue borrada.',
              'success'
            )
            this.router.navigate(['contacts']);
          }else{
            generarMensajeError('tu moneda no fue borrada.')
          }
        }
    )}
    })
  }
}
