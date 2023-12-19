import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Currency } from 'src/app/interfaces/currency';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-currencylist',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './currencylist.component.html',
  styleUrls: ['./currencylist.component.scss'],
})
export class CurrencylistComponent {
  router = inject(Router);
  @Input({required:true}) c!:Currency;

}


