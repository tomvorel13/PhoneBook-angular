import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactComponent } from './components/contact/contact.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

//Routes
const appRoutes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'my-contacts', component: ContactListComponent},
  { path: 'add-contact', component: AddContactComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactListComponent,
    ContactComponent,
    AddContactComponent,
    DashboardComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
