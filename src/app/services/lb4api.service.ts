import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { truewind } from '../classes/nmea';
@Injectable()
export class lb4apiService
{
    constructor (private httpclient: HttpClient) {}
    getlastnmeas(): Observable<any> {
        return this.httpclient.get ("http://192.168.0.190:3000/nmeas?filter[limit]=1&filter[order]=ID%20DESC");
    }
    getnmeawithfilter (filter: string): Observable<any> {
        return this.httpclient.get ("http://192.168.0.190:3000/nmeas?"+filter);
    }
    gettest (ext: string): Observable<any>{
        return this.httpclient.get ("http://95.110.224.199:4000"+ext);
    }
}

export function convert(ingresso: number ){
    return ingresso*2;
}
//funzione di calcolo del vento reale
export function tw_calc (awa: number, aws: number, shipspeed: number, heading: number){

    var risultato = new  truewind;
    var awa_rad: number;
    var twa_rad: number;
    awa_rad = Math.PI/180*awa; //calcolo il valore dell'angolo in radianti altrimenti non funziona
    risultato.tws=arrotonda (Math.sqrt(Math.pow(shipspeed,2)+Math.pow(aws,2)-(2*shipspeed*aws*Math.cos(awa_rad))),2);
    twa_rad = Math.acos(((aws*Math.cos(awa_rad))-shipspeed)/risultato.tws);
    risultato.twa = arrotonda ((awa >0 && awa < 180) ? twa_rad*180/Math.PI : (360 - (twa_rad*180/Math.PI)),2);
    risultato.twd = arrotonda(((heading+risultato.twa)>360)? heading+risultato.twa-360 : heading + risultato.twa,2);
    
    return risultato;
}
export function arrotonda (numero: number, cifre: number){
    
    return Math.round(Math.pow(10,cifre)*numero)/Math.pow(10,cifre);

}

export function converticoordinate (coordinate: number, pole: string) {
    
     var gradi = Math.trunc( coordinate * Math.pow (10,-2));
     var primi = coordinate  - (gradi*Math.pow(10,2));
     return  (pole === 'N' || pole === 'E')?gradi+(primi/60):-1*(gradi+(primi/60));
    
}