import { Component } from '@angular/core';
import { IonImg } from '@ionic/angular/standalone';

@Component({
  standalone: true,
  selector: 'app-image-logo',
  templateUrl: 'image-logo.component.html',
  styleUrls: ['image-logo.component.scss'],
  imports: [IonImg],
})
export class ImageLogoComponent {} 