import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router) { }
  
 goToAbout(){
  console.log("Go to About");
  this.router.navigate(['/about']);
 }

  goToProject(){
  console.log("Go to About");
  this.router.navigate(['/project']);
 }
  goToContact(){
  console.log("Go to About");
  this.router.navigate(['/contact']);
 }
}
