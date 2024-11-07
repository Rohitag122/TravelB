import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FlightsComponent } from './components/flights/flights.component';
import { HotelsComponent } from './components/hotels/hotels.component';
import { TrainsComponent } from './components/trains/trains.component';
import { BusesComponent } from './components/buses/buses.component';
import { BookingComponent } from './components/booking/booking.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { RegistrationComponent } from './components/registration/registration.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'flights', component: FlightsComponent },
  { path: 'hotels', component: HotelsComponent },
  { path: 'trains', component: TrainsComponent },
  { path: 'buses', component: BusesComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'register', component: RegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
