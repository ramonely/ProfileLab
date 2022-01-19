import { Component, OnInit } from '@angular/core';
import { profile } from '../profile';
import { ProfileServiceService } from '../profile-service.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  profile : profile = this.profileService.getUserProfile();

  constructor(public profileService: ProfileServiceService) { }

  ngOnInit(): void {
  }

}
