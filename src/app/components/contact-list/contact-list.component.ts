import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: "app-contact-list",
  templateUrl: "./contact-list.component.html",
  styleUrls: ["./contact-list.component.css"]
})
export class ContactListComponent implements OnInit {
  contacts = [
    {
      firstName: "John",
      lastName: "Malarkey",
      phone: 123456789
    },
    {
      firstName: "Ben",
      lastName: "Wilkins",
      phone: 987456123
    },
    {
      firstName: "Larry",
      lastName: "Smith",
      phone: 456789123
    }
  ];

  constructor() {}

  ngOnInit() {}

  onDeleteContact(){

  }
}
