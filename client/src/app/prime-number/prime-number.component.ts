import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

import {catchError, map, throwError} from "rxjs";
import {InputNumberModule} from "primeng/inputnumber";
import {ButtonModule} from "primeng/button";
import {PrimeNumberHttpService} from "../../services/prime-number-http.service";

@Component({
  selector: 'prime-numbers',
  templateUrl:'./prime-number.component.html',
  styleUrls: ['./prime-number.component.css'],
  standalone: true,
  imports: [
    InputNumberModule,
    ButtonModule,
    ReactiveFormsModule
  ],
})
export class PrimeNumberComponent{
  numberList: number[] = [];
  computationTime!: number;
  error: string | null = null;

  primeNumberFormGroup = new FormGroup({
    limit: new FormControl<number>(0, [Validators.required, Validators.min(2)])
    }
  );

  constructor(private primeNumberHttpService: PrimeNumberHttpService) {}

  /**
   * Get all prime numbers up to a limit with computation time
   */
  getPrimeNumbers() {
    const limit = this.primeNumberFormGroup.value.limit;
    if (limit) {
      this.primeNumberHttpService.getAll(limit).pipe(
        map((response: any) => {
          this.numberList = response.primeNumbers;
          this.computationTime = response.computationTime;
        }),
        catchError((error) => {
          this.error = "An error occurred while fetching prime numbers.";
          return throwError(error);
        })
      ).subscribe();
    }
  }
}
