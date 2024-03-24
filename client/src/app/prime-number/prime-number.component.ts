import {Component, OnDestroy} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

import { Subscription} from "rxjs";
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

  primeNumberFormGroup = new FormGroup({
    limit: new FormControl<number>(0, [Validators.required, Validators.min(2)])
    }
  );

  constructor(private primeNumberHttpService: PrimeNumberHttpService) {}

  getPrimeNumbers(){
    const limit = this.primeNumberFormGroup.value.limit;
    if(limit){
      this.primeNumberHttpService.getAll(limit).subscribe();
    }
  }
}
