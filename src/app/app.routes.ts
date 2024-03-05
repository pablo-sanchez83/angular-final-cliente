import { Routes } from '@angular/router';
import { ClimaComponent } from './pages/clima/clima.component';
import { HomeComponent } from './pages/home/home.component';
import { CatsComponent } from './pages/cats/cats.component';
import { GithubComponent } from './pages/github/github.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
export const routes: Routes = [

{path: 'home', component:HomeComponent},
{path: 'clima', component:ClimaComponent},
{path: 'cats', component:CatsComponent},
{path: 'github', component:GithubComponent},
{path: 'server', component:UsuariosComponent},
{path: '**',redirectTo: 'home',pathMatch:'full' },
];