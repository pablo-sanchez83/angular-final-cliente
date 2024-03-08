import { Component, inject } from '@angular/core';
import { CatsService } from '../../services/cats.service';
@Component({
  selector: 'app-cats',
  standalone: true,
  imports: [],
  templateUrl: './cats.component.html',
  styleUrl: './cats.component.css'
})
export class CatsComponent {
  // Variable para almacenar la imagen del gato
  imgGato: string = '../../assets/loading.svg';
  // Inyectamos el servicio CatsService
  private _catsService: CatsService = inject(CatsService);
  // Método para insertar un gato
  insertarGato() {
    // Llamamos al método getCat del servicio CatsService
    this._catsService.getCat().subscribe(
      (data) => {
        // Procesamos los datos recibidos y actualizamos la imagen del gato
        this.imgGato = this._catsService.processCat(data);
      }
    )
  }
}
