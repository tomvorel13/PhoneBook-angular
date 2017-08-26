import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';

import { Contact } from '../../models/Contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Input('contact') contact:Contact;

  constructor(public dataService: DataService) { }

  ngOnInit() {
  }

  deleteContact(contact){
    this.dataService.deleteContact(contact);
  }

}
