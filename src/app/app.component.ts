import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { ButtonComponent } from './MyComponent/button/button.component';
import { SearchBarComponent } from './MyComponent/search-bar/search-bar.component';
import { BannerComponent } from './MyComponent/banner/banner.component';
import { ImageLogoComponent } from './MyComponent/image-logo/image-logo.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, 
            IonRouterOutlet,
            ButtonComponent,
            SearchBarComponent,
            BannerComponent,
            ImageLogoComponent],
})
export class AppComponent {
  constructor() {}
}
