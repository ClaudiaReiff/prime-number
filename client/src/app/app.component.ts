import {Component} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {PrimeNumberComponent} from "./prime-number/prime-number.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    PrimeNumberComponent,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{}
