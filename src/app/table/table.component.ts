import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  headers = ["Item", "Availability", "Price"];

  items = [{
    "Item": "Cinematography",
    "Availability": "Available",
    "Price": "200$"
  },
  {
    "Item": "Video Editing",
    "Availability": "Available",
    "Price": "10$"
  },
  {
    "Item": "Videography",
    "Availability": "Available",
    "Price": "130$"
  },
  {
    "Item": "Assistant",
    "Availability": "Available",
    "Price": "30"
  }
  ];
}
