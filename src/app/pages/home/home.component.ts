import { Component} from '@angular/core';

@Component({
 selector: 'app-home',
 templateUrl: './home.component.html',
 styleUrls: ['./home.component.css']
})
export class HomeComponent {  // Esto es la definición de la clase del componente.
    img = 'https://picsum.photos/400/200';  // Esto es una propiedad de la clase que probablemente se utiliza para mostrar una imagen en la plantilla HTML.
    constructor() { }  // Esto es el constructor de la clase. Se invoca cuando se crea una instancia de la clase.
   }
   