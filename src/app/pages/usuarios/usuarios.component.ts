import { Component } from '@angular/core';
import { UsuarioComponent } from '../../components/usuario/usuario.component';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [UsuarioComponent],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {
  constructor (private __apiService: ApiService) {
    this.getUsuarios();
  }
  usuarios: any;
  getUsuarios() {
    this.__apiService.get('http://localhost:3000/usuarios').subscribe(
      (data) => {
        this.usuarios = data;
      }
    );
  }

}
