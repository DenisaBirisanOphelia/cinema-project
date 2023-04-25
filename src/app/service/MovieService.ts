import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Movie} from "../model/Movie";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  baseURL: string = "http://localhost:8081/movie";

  constructor(private httpClient: HttpClient) {
  }

  getAllMovies() {
    return this.httpClient.get<Movie[]>(this.baseURL+"/findAllMovies");
  }

  //
  // getMasinaByMarca(marca: string) {
  //   return this.httpClient.get(this.baseURL + "/find/" + marca);
  // }
  //
  // deleteMasina(id: number) {
  //   return this.httpClient.delete(this.baseURL + id);
  // }
}
