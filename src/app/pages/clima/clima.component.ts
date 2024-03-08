import { Component, inject } from '@angular/core';
import { ClimaService } from '../../services/clima.service';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css'],
  standalone: true,
  imports: [FormsModule],
})
export class ClimaComponent {
  // Declaramos la propiedad ciudad con un valor inicial vacío
  ciudad: string = '';

  // Inyectamos el servicio ClimaService en la propiedad privada _climaService
  private _climaService = inject(ClimaService);

  // Declaramos la propiedad datosClima para almacenar los datos del clima
  datosClima: any;

  // Método para buscar la ciudad y obtener los datos del clima
  buscarCiudad() {
    // Llamamos al método buscarClima del servicio _climaService
    // Nos suscribimos al Observable que devuelve y procesamos los datos
    this._climaService.buscarClima(this.ciudad).subscribe(
      (data: any) => {
        this.datosClima = this._climaService.procesarDatosClima(data);
      });
  }
}