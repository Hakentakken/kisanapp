import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Listing } from '../../app/models/listing.model';

@Component({
  selector: 'app-listing-card',
  standalone: true,
  imports: [CommonModule, IonicModule],
  template: `
    <ion-card>
      <ion-img [src]="listing.imageUrl" *ngIf="listing.imageUrl"></ion-img>
      <ion-card-header>
        <ion-card-title>{{ listing.title }}</ion-card-title>
        <ion-card-subtitle>{{ listing.type | titlecase }}</ion-card-subtitle>
      </ion-card-header>
      <ion-card-content>
        <p>{{ listing.description }}</p>
        <p><strong>Location:</strong> {{ listing.location }}</p>
        <ion-button expand="block" (click)="showContact = !showContact">
          {{ showContact ? 'Hide' : 'Show' }} Contact Info
        </ion-button>
        <div *ngIf="showContact" class="contact-info">
          <p><strong>Name:</strong> {{ listing.poster.name }}</p>
          <p><strong>Phone:</strong> {{ listing.poster.phone }}</p>
          <p *ngIf="listing.poster.email"><strong>Email:</strong> {{ listing.poster.email }}</p>
          <p *ngIf="listing.poster.whatsapp"><strong>WhatsApp:</strong> {{ listing.poster.whatsapp }}</p>
        </div>
      </ion-card-content>
    </ion-card>
  `,
  styles: [`
    .contact-info { margin-top: 1em; }
  `]
})
export class ListingCardComponent {
  @Input() listing!: Listing;
  showContact = false;
}