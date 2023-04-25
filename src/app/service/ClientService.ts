import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Client} from "../model/Client";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  baseURL: string = "http://localhost:8081/client";

  constructor(private httpClient: HttpClient) {
  }
//nu s sigura daca asa trimit parametrii si de / aia!
   login(nume: string,prenume:string,pass:string) {
    return this.httpClient.get(this.baseURL + "/findNumePrenumePass?nume="+nume+"&prenume="+prenume
    +"&pass="+pass);
   }

}
