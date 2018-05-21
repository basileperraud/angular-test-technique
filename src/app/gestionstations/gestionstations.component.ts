import { Component, OnInit } from '@angular/core';


import { Location } from '@angular/common';

import { Stations } from '../stations';

@Component({
  selector: 'app-gestionstations',
  templateUrl: './gestionstations.component.html',
  styleUrls: ['./gestionstations.component.css']
})
export class GestionstationsComponent implements OnInit {
	stations : Stations[]=[]

  constructor(
    private location: Location
  ) { }

  ngOnInit() {
  }
  goBack(): void {
  this.location.back();
}

}
