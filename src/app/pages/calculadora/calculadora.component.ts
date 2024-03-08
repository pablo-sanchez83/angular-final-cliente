import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  public num1: number = 0;
  public num2: number = 0;
  public result: number = 0;

  public calculate(op: string) {
    switch(op) {
      case '+':
        this.result = +this.num1 + +this.num2;
        break;
      case '-':
        this.result = this.num1 - this.num2;
        break;
      case '*':
        this.result = this.num1 * this.num2;
        break;
      case '/':
        if (this.num2 === 0) {
          this.result = 404;
        }
        else {
          this.result = this.num1 / this.num2;
        }
        break;
    }
  }
}