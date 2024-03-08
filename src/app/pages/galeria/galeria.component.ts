import { Component, OnInit } from '@angular/core';
import { PhotoComponent } from '../../components/photo/photo.component';
import { Photo } from '../../models/photo';
import { GaleriaService } from '../../services/galeria.service';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [PhotoComponent],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent implements OnInit {
  // Declaramos la propiedad photoTest y la inicializamos con una nueva instancia de Photo
  photoTest = new Photo();

  // Declaramos la propiedad photoList para almacenar una lista de fotos
  photoList!: Photo[];

  // Inyectamos el servicio GaleriaService en el constructor
  constructor(private galeriaService: GaleriaService) { }

  // Método que se ejecuta cuando se inicializa el componente
  ngOnInit(): void {
    // Asignamos una URL de descarga a photoTest
    this.photoTest.download_url = "https://cdn.pixabay.com/photo/2015/06/22/08/40/child-817373_1280.jpg";

    // Llamamos al método getPhoto del servicio galeriaService
    // Nos suscribimos al Observable que devuelve y asignamos los datos a photoList
    this.galeriaService.getPhoto().subscribe(
      (data: Photo[]) => {
        this.photoList = data;
        console.log(this.photoList);
      }
    );
  }
}