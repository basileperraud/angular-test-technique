import { Component, OnInit } from '@angular/core';
import { Stations } from '../stations';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})
export class StationsComponent implements OnInit {
stations: Stations = {
	id: 13,
	name: "St Lazare",
	sens: 'Saint-Denis Université',
	time: 1
}

  constructor() { }

  ngOnInit() {
  }

}
