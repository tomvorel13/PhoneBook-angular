import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from "../../services/data.service";

import { Contact } from '../../models/Contact';

@Component({
  selector: "app-contact-list",
  templateUrl: "./contact-list.component.html",
  styleUrls: ["./contact-list.component.css"]
})
export class ContactListComponent implements OnInit {
  contacts: Contact[];

  constructor(public dataService: DataService) {}

  ngOnInit() {
    this.contacts = this.dataService.getContacts();
  }

  onDeleteContact() {}
}
