import { Routes } from '@angular/router';
// Importación de los componentes necesarios
import { ClimaComponent } from './pages/clima/clima.component';
import { HomeComponent } from './pages/home/home.component';
import { CatsComponent } from './pages/cats/cats.component';
import { GithubComponent } from './pages/github/github.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { CalculadoraComponent } from './pages/calculadora/calculadora.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';

// Definición de las rutas
export const routes: Routes = [
  {path: 'home', component:HomeComponent, title: 'Home'},
  {path: 'clima', component:ClimaComponent, title: 'Clima'},
  {path: 'cats', component:CatsComponent, title: 'Gatos'},
  {path: 'github', component:GithubComponent, title: 'GitHub'},
  {path: 'server', component:UsuariosComponent, title: 'Servidor'},
  {path: 'calculadora', component:CalculadoraComponent, title: 'Calculadora'},
  {path: 'galeria', component:GaleriaComponent, title: 'Galería'},
  // Ruta por defecto que redirige a 'home'
  {path: '**',redirectTo: 'home',pathMatch:'full' },
];
