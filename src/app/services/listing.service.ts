import { Injectable } from '@angular/core';
import { Listing } from '../models/listing.model';

@Injectable({ providedIn: 'root' })
export class ListingService {
  private listings: Listing[] = [];

  getAll(): Listing[] {
    return [...this.listings];
  }

  add(listing: Listing) {
    this.listings.push(listing);
  }

  remove(id: string) {
    this.listings = this.listings.filter(l => l.id !== id);
  }

  getById(id: string): Listing | undefined {
    return this.listings.find(l => l.id === id);
  }
}