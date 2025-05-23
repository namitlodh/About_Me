import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-detail',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  
    showDetails = false;

  details = [
    { label: 'Experience', value: '1+ year in .Net' },
    { label: 'Location', value: 'Mumabi, India' },
    { label: 'Interests', value: 'Photography, Travelling, Blogging' },
    // Add more details as needed
  ];

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }
}
