import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../../services/api.service';
import { FormsModule, FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-usuario-lista',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  // Array para almacenar los usuarios
  usuarios: any[] = [];

  // Formulario para agregar un nuevo usuario
  usuarioForm: FormGroup;

  constructor(private usuarioService: UsuarioService, private formBuilder: FormBuilder) {
    // Inicialización del formulario con campos vacíos y validación requerida
    this.usuarioForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', Validators.required],
      ciudad: ['', Validators.required],
      ocupacion: ['', Validators.required]
    });
  }

  // Método para borrar un usuario
  borrarUsuario(id: number) {
    this.usuarioService.deleteUsuario(id).subscribe(() => {
      // Actualización del array de usuarios después de borrar un usuario
      this.usuarios = this.usuarios.filter(usuario => usuario.id !== id);
    });
  }

  // Método que se ejecuta al inicializar el componente
  ngOnInit(): void {
    this.usuarioService.getUsuarios(0, 100).subscribe(data => {
      // Asignación de los usuarios obtenidos a la variable usuarios
      this.usuarios = data.usuarios;
    });
  }

  // Método para insertar un usuario
  insertarUsuario() {
    // Verificación de que el formulario es válido
    if (this.usuarioForm.valid) {
      this.usuarioService.createUsuario(this.usuarioForm.value).subscribe(usuario => {
        // Adición del nuevo usuario al array de usuarios
        this.usuarios.push(usuario);
        // Reinicio del formulario
        this.usuarioForm.reset();
      });
    }
  }
}
