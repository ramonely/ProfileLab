import { Injectable } from '@angular/core';
import { profile } from './profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService 
{

  profile: profile = 
  {
    "name": "Grand",
    "contact": "default@grand.com",
    "bio": "NA",
    
  };

  constructor() { }

  getUserProfile(): profile 
  {
    return this.profile;
  }

  setUserProfile(updatedProfile: profile): void
  {
    this.profile.name = updatedProfile.name;
    this.profile.contact = updatedProfile.contact;
    this.profile.bio = updatedProfile.bio;

  }
}
