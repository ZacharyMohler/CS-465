import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from '../services/authentication.service';

//old import of file data (replaced by api call)
//import { trips } from '../data/trips'; 

import { TripDataService } from '../services/trip-data.service';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-trip-listing',
  templateUrl: './trip-listing.component.html',
  styleUrls: ['./trip-listing.component.css'],
  providers: [TripDataService]
})

export class TripListingComponent implements OnInit {

  //old call (from file)
  //trips: Array<any> = trips;

  trips: Trip[];

  message: string;

  constructor(
    private tripDataService: TripDataService,
    private router: Router,
    private authenticationService: AuthenticationService
    ) { }


  public isLoggedIn(): boolean
  {
    return this.authenticationService.isLoggedIn();
  }

  private addTrip(): void 
  {
    console.log('Inside TripListingComponent#addTrip');
    this.router.navigate(['add-trip']);
  }

  private getTrips(): void 
  {
    console.log('Inside TripListingComponent#getTrips');
    this.message = 'Searching for trips...';
    this.tripDataService
      .getTrips()
        .then(foundTrips =>
          {
            this.message = foundTrips.length > 0 ? '' : 'No trips found';
            this.trips = foundTrips;
          });
  }

  ngOnInit(): void
  {
    this.getTrips();
  }

}
