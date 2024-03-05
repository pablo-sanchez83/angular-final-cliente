import { Component, Input } from '@angular/core';
import { Usuario } from '../../../interfaces';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {
  @Input() usuario!: Usuario;
}
