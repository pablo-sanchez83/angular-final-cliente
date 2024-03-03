import { Routes } from '@angular/router';
import { ClimaComponent } from './pages/clima/clima.component';
import { HomeComponent } from './pages/home/home.component';
import { CatsComponent } from './pages/cats/cats.component';

export const routes: Routes = [

{path: '', component:HomeComponent},
{path: 'clima', component:ClimaComponent},
{path: 'cats', component:CatsComponent},

{path: '**',redirectTo: '',pathMatch:'full' },

];