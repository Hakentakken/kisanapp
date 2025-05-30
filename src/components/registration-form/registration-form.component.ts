import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { UserProfile } from '../../app/models/user-profile.model';

@Component({
  selector: 'app-registration-form',
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule],
  template: `
    <form (ngSubmit)="register()">
      <ion-list>
        <ion-item>
          <ion-label position="floating">Name</ion-label>
          <ion-input [(ngModel)]="profile.name" name="name" required></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Phone</ion-label>
          <ion-input [(ngModel)]="profile.phone" name="phone" required></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Email</ion-label>
          <ion-input [(ngModel)]="profile.email" name="email" type="email"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">WhatsApp</ion-label>
          <ion-input [(ngModel)]="profile.whatsapp" name="whatsapp"></ion-input>
        </ion-item>
      </ion-list>
      <ion-button expand="block" type="submit">Register</ion-button>
    </form>
  `
})
export class RegistrationFormComponent {
  @Output() registered = new EventEmitter<UserProfile>();
  profile: UserProfile = {
    id: '',
    name: '',
    phone: '',
    email: '',
    whatsapp: ''
  };

  register() {
    this.profile.id = Date.now().toString();
    this.registered.emit(this.profile);
  }
}