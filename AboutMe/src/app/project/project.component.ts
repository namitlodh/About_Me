import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {

   projects = [
    {
      title: 'Portfolio Website',
      description: 'A personal website to showcase my work and skills.',
      image: 'assets/images/portfolio.png',
      link: 'https://yourportfolio.com'
    },
    {
      title: 'Task Manager App',
      description: 'A to-do list app built with Angular and Firebase.',
      image: 'assets/images/task-manager.png',
      link: 'https://yourtaskapp.com'
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather info using an open weather API.',
      image: 'assets/images/weather.png',
      link: 'https://yourweatherapp.com'
    }
  ];
}
