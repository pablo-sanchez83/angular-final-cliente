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
  photoTest=new Photo();
  photoList!:Photo[];

  constructor(private galeriaService:GaleriaService){

  }

  ngOnInit(): void {
    this.photoTest.download_url="https://cdn.pixabay.com/photo/2015/06/22/08/40/child-817373_1280.jpg";
    this.galeriaService.getPhoto().subscribe({
      next:(data) => {
        this.photoList=data;
        console.log(this.photoList);
      }
    })
  }

}