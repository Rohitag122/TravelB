import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

interface Booking {
  bookingId: string;
  hotelName: string;
  checkInDate: string;
  checkOutDate: string;
  price: number;
}

interface User {
  name: string;
  email: string;
  phone?: string; // Make phone optional if not provided
  profilePicture?: string; // Make profilePicture optional
  address?: string; // Make address optional
  bookings: Booking[]; // Include bookings as an array
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: User | null = null; // Initialize user as null

  constructor(private userService: UserService) {}

  ngOnInit() {
    const email = 'user@example.com'; // Corrected email format
    this.user = this.userService.getUser(email);

    if (!this.user) {
      console.error('No user data found');
    }
  }
}
