// app.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports : [
    FormsModule
  ],
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent {
  githubUser = '';
}
