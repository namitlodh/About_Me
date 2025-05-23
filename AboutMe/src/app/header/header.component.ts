import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { BodyComponent } from "../body/body.component";
import { HomeComponent } from "../home/home.component";
import { DetailComponent } from "../detail/detail.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, BodyComponent, HomeComponent, DetailComponent, FooterComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router) { }
  
 goToAbout(){
  console.log("Go to About");
  this.router.navigate(['/about']);
 }
}
