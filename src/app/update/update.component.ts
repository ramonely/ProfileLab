import { Component, OnInit } from '@angular/core';
import { profile } from '../profile';
import { ProfileServiceService } from '../profile-service.service';



@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  profile : profile = this.profileService.getUserProfile();

  constructor(public profileService: ProfileServiceService) { }
  
  ngOnInit(): void {
  }

}
