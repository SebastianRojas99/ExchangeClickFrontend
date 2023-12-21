import { Injectable } from "@angular/core"
import { ApiService } from "./api.service"
import { FromConversion, ToConversion } from "../interfaces/currency";
import { API } from "../constants/api";

@Injectable({
    providedIn: 'root'
})

export class ConversionService extends ApiService
{
    async conversion(fromconversion:FromConversion,toconversion:ToConversion,quantity:number): Promise<{ conversionRate: number }> {
        try {
          const res = await fetch(API + 'Currency/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: "Bearer " + this.auth.token()
            },
            body: JSON.stringify({
              symbol1: fromconversion.currencySymbol,
              symbol2: toconversion.currencySymbol,
              quantity
          })
          });
          if (res.ok) {
            const conversionData = await res.json(); // Parsea la respuesta JSON
            console.log(conversionData)
            console.log('From Conversion:', fromconversion);
            console.log('To Conversion:', toconversion);
            console.log( "devuelve "+JSON.stringify({
              symbol1: fromconversion.currencySymbol,
              symbol2: toconversion.currencySymbol,
              quantity
          }));
            return conversionData; // Devuelve el objeto con la tasa de conversión
          } else {
            console.log('From Conversion:', fromconversion);
            console.log('To Conversion:', toconversion);

            throw new Error('Error al convertir moneda');
          }
        } catch (error) {
          console.error('Error de conversión:', error);
          throw error; // Re-lanza el error para que sea manejado en la capa superior
        }
      }
}