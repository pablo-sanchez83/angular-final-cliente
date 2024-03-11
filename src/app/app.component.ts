import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


@Component({  // Esto es un decorador que marca una clase como un componente de Angular y proporciona metadatos de configuración.
  selector: 'app-root',  // Este es el selector del componente. Se utiliza para identificar este componente en las plantillas HTML.
  standalone: true,  // Esto significa que el componente puede existir independientemente, sin ser parte de un módulo.
  imports:  // Esto define los componentes o módulos que se importarán en este componente.
    [
      HeaderComponent,  // Este es probablemente un componente de encabezado.
      RouterOutlet,  // Esto es para la funcionalidad de enrutamiento en Angular.
      FooterComponent,  // Este es probablemente un componente de pie de página.
    ],
  templateUrl: './app.component.html',  // Esto es la ubicación del archivo de plantilla HTML para este componente.
  styleUrl: './app.component.css'  // Esto es la ubicación del archivo de estilos CSS para este componente.
})
export class AppComponent {  // Esto es la definición de la clase del componente.
  title = 'grid-proyect';  // Esto es una propiedad de la clase que probablemente se utiliza en la plantilla HTML.
}
