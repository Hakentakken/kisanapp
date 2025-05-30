import { UserProfile } from './user-profile.model';

export type ListingType = 'equipment' | 'crop' | 'land';

export interface Listing {
  id: string;
  type: ListingType;
  title: string;
  description: string;
  imageUrl?: string;
  location: string;
  poster: UserProfile;
  cropType?: string; // Only for crop listings
}