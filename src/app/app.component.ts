import { Component } from '@angular/core';
import { MyComponent } from './MyComponent.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  // template: '<h1>My first Angular app</h1><MyComponent></MyComponent>',
})
export class AppComponent {
  name: string = 'Piet';
}
