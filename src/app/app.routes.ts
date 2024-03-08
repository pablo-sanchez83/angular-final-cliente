import { Routes } from '@angular/router';
import { ClimaComponent } from './pages/clima/clima.component';
import { HomeComponent } from './pages/home/home.component';
import { CatsComponent } from './pages/cats/cats.component';
import { GithubComponent } from './pages/github/github.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { CalculadoraComponent } from './pages/calculadora/calculadora.component';
import { TicTacToeComponent } from './pages/tictactoe/tictactoe.component';
export const routes: Routes = [

{path: 'home', component:HomeComponent},
{path: 'clima', component:ClimaComponent},
{path: 'cats', component:CatsComponent},
{path: 'github', component:GithubComponent},
{path: 'server', component:UsuariosComponent},
{path: 'calculadora', component:CalculadoraComponent},
{path: 'tictactoe', component:TicTacToeComponent},
{path: '**',redirectTo: 'home',pathMatch:'full' },
];