// app.component.ts
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GithubService } from '../../services/github.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports : [
    FormsModule
  ],
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
// Definimos la clase GithubComponent
export class GithubComponent {
  // Declaramos la propiedad btnClick y la inicializamos en false
  btnClick: boolean = false;

  // Declaramos la propiedad githubUser y la inicializamos en una cadena vacía
  githubUser = '';

  // Inyectamos el servicio GithubService en la propiedad privada __githubService
  private __githubService = inject(GithubService);

  // Declaramos la propiedad datosGithub para almacenar los datos del usuario de Github
  datosGithub: any;

  // Método para obtener los datos del usuario de Github
  getUser(){
    // Cambiamos el valor de btnClick a true
    this.btnClick = true;

    // Llamamos al método buscarUsuario del servicio __githubService
    // Nos suscribimos al Observable que devuelve y procesamos los datos
    this.__githubService.buscarUsuario(this.githubUser).subscribe(
      (data: any) => {
        this.datosGithub = this.__githubService.procesarDatosGithub(data);
      }
    )
  }
}

