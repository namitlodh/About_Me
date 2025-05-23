import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  contact = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    console.log('Contact Form Data:', this.contact);
    alert('Message sent!');
    // Optionally, reset the form:
    this.contact = { name: '', email: '', message: '' };
  }
}
