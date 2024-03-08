import { Component } from '@angular/core';
// Importamos FormsModule para permitir la entrada de datos en el componente
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
// Definimos la clase CalculadoraComponent
export class CalculadoraComponent {
  // Definimos las variables num1, num2 y result para almacenar los números y el resultado
  public num1: number = 0;
  public num2: number = 0;
  public result: number = 0;

  // Definimos el método calculate que realiza la operación especificada
  public calculate(op: string) {
    switch(op) {
      case '+':
        // Si la operación es suma, sumamos num1 y num2
        this.result = +this.num1 + +this.num2;
        break;
      case '-':
        // Si la operación es resta, restamos num2 de num1
        this.result = this.num1 - this.num2;
        break;
      case '*':
        // Si la operación es multiplicación, multiplicamos num1 y num2
        this.result = this.num1 * this.num2;
        break;
      case '/':
        // Si la operación es división, dividimos num1 por num2
        // Si num2 es 0, establecemos el resultado como 404 para indicar un error
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