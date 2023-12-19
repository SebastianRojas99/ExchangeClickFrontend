import { Component, OnInit, inject } from '@angular/core';
import { CurrencyService } from 'src/app/services/currency.service';
import { Currency } from 'src/app/interfaces/currency';
@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.scss']
})
export class ConversorComponent implements OnInit {
  
  currencyService = inject(CurrencyService);
  currencies:Currency[] = []

  ngOnInit(): void {
    this.currencyService.getAll().then(res => {
      this.currencies = res;
      console.log("Lista de monedas:", res);
    });
  }
}
