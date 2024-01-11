import { Component, OnInit, HostListener, inject, Input } from '@angular/core';
import { CurrencyService } from 'src/app/services/currency.service';
import {  Currency, CurrencyForCreation } from 'src/app/interfaces/currency';
import { Profile } from 'src/app/interfaces/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.scss']
})
export class ConversorComponent implements OnInit {

  currencyService = inject(CurrencyService);
  activatedRoute = inject(ActivatedRoute);
  currencies: Currency[] = [];
  textoAModoMobile = '';
  isMobileResolution(): boolean {
    return window.innerWidth <= 768;
  }

  ngOnInit(): void {
    this.currencyService.getAll().then(res => {
      this.currencies = res;
      console.log("Lista de monedas:", res);
    });
  }


  @HostListener('window:resize')
  onResize() {
    if (!this.isMobileResolution()) {
      this.textoAModoMobile = '';
    }
  }
}
