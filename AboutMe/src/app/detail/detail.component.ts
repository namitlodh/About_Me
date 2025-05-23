import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-detail',
  imports: [CommonModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {

  
    showDetails = false;

  details = [
    { label: 'Experience', value: '3+ years in web development' },
    { label: 'Location', value: 'Bangalore, India' },
    { label: 'Interests', value: 'UI/UX Design, Animation, Blogging' },
    // Add more details as needed
  ];

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }
}
