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
  imgGato: string = '../../assets/loading.svg';
  private _catsService = inject(CatsService);
  insertarGato() {
    this._catsService.getCat().subscribe(
      (data) => {
        this.imgGato = this._catsService.processCat(data);
      }
    )
  }
}
