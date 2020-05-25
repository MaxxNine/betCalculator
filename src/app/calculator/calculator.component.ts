import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  siteA: any = { 
    oddA: null,
    oddB: null 
  };

  solucaoA: any = {
    gastoA1: null,
    gastoA2: null,
  }
  
  siteB: any = { 
    oddA: null,
    oddB: null 
  };

  gastoMax: number;  
  calc: number = 0;

  changeCalc(number) {
    this.calc = number;
  }

  normalCalc() {    
    const K1 = parseFloat(this.siteA.oddA)/parseFloat(this.siteA.oddB);  
    this.solucaoA.gastoA1 = (this.gastoMax/(K1 + 1)).toFixed(2);
    this.solucaoA.gastoA2 = (this.gastoMax - this.solucaoA.gastoA1).toFixed(2);  
  }
}
