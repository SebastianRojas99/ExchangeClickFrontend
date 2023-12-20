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
          const res = await fetch(API + 'Currency/convertir-moneda', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: "Bearer " + this.auth.token()
            },
            body: JSON.stringify({
              symbol1: fromconversion.currencySymbol,
              symbol2: toconversion.currencySymbol, // Corregido
              quantity
            })
          });
          if (res.ok) {
            const conversionData = await res.json(); // Parsea la respuesta JSON
            console.log(conversionData)
            return conversionData; // Devuelve el objeto con la tasa de conversión
          } else {
            throw new Error('Error al convertir moneda');
          }
        } catch (error) {
          console.error('Error de conversión:', error);
          throw error; // Re-lanza el error para que sea manejado en la capa superior
        }
      }
}