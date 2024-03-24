import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {PrimeNumberResponse} from "../models/prime-number-response.model";

@Injectable({providedIn: 'root'})
export class PrimeNumberHttpService {
  constructor(private httpClient: HttpClient) {}

  getAll(limit:number) {
    return this.httpClient.get<{ primeNumbers:number[], computationTime:number }>(`/api/prime-number/get-all/${limit}`);
  }
}
