import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../../services/api.service';
import { UsuarioComponent } from '../../components/usuario/usuario.component';

@Component({
  selector: 'app-usuario-lista',
  standalone: true,
  imports: [UsuarioComponent, CommonModule],
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: any[] = [];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.getUsuarios(0, 10).subscribe(data => {
      this.usuarios = data.usuarios;
    });
  }
}
