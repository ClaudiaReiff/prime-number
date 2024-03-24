import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {PrimeNumberResponse} from "../models/prime-number-response.model";

@Injectable({providedIn: 'root'})
export class PrimeNumberHttpService {
  constructor(private httpClient: HttpClient) {}

  getAll(limit:number) {
    return this.httpClient.get<PrimeNumberResponse>(`/api/PrimeNumber/get-all/${limit}`);
  }
}
