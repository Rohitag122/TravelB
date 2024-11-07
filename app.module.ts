import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FlightsComponent } from './components/flights/flights.component';
import { HotelsComponent } from './components/hotels/hotels.component';
import { TrainsComponent } from './components/trains/trains.component';
import { BusesComponent } from './components/buses/buses.component';
import { BookingComponent } from './components/booking/booking.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FlightsComponent,
    HotelsComponent,
    TrainsComponent,
    BusesComponent,
    BookingComponent,
    UserProfileComponent,
    AdminDashboardComponent,
    RegistrationComponent,
    NavbarComponent,
    FooterComponent,
    BookingHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
 
  ],
  providers: [
    provideClientHydration()
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
