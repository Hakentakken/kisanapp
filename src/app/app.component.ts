import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { ButtonComponent } from './MyComponent/button/button.component';
import { SearchBarComponent } from './MyComponent/search-bar/search-bar.component';
import { BannerComponent } from './MyComponent/banner/banner.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet,ButtonComponent,SearchBarComponent,BannerComponent],
})
export class AppComponent {
  constructor() {}
}
