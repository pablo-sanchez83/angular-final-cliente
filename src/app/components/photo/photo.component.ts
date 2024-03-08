import { Component, Input } from '@angular/core';
// Importamos el modelo Photo
import { Photo } from '../../models/photo';
// Importamos NgOptimizedImage para optimizar la carga de imágenes
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-photo',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.css'
})
export class PhotoComponent {
  // Usamos el decorador Input para permitir que el valor de 'photo' se pase desde el componente padre
  @Input() photo!: Photo;

}