import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { ButtonComponent } from './MyComponent/button/button.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet,ButtonComponent],
})
export class AppComponent {
  constructor() {}
}
