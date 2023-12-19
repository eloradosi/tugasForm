import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Nasabah } from "../model/nasabah-model";

const baseUrl = 'https://6580f9853dfdd1b11c424344.mockapi.io/rakamin/';

@Injectable({
    providedIn: 'root'
})

export class NasabahService{
    constructor(private http: HttpClient){}

    getAllNasabahData():Observable<Nasabah[]>{
        return this.http.get<Nasabah[]>(`${baseUrl}/GetAllUsersData`);
    }

    submitData(name:String, mataUang:String, kota:String, saldo:String, negara:String, ){
        const body = {name: name, currency: mataUang , balance:saldo, city:kota, country:negara}
        return this.http.post(`${baseUrl}/GetAllUsersData`,body)

    }
}