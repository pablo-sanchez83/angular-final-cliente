import { Component} from '@angular/core';

@Component({
 selector: 'app-home',
 templateUrl: './home.component.html',
 styleUrls: ['./home.component.css']
})
export class HomeComponent {
 img = 'https://picsum.photos/400/200';
 constructor() { }
}