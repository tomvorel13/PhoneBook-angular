import { Injectable } from '@angular/core';
import { Contact } from '../models/Contact';

@Injectable()
export class DataService {
  contacts: Contact[];

  constructor() { 
    this.contacts = [
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
}

getContacts(){
  return this.contacts;
}

}
