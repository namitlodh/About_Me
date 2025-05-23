import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-body',
  imports: [FormsModule,CommonModule],
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {

   name: string = '';
   
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
