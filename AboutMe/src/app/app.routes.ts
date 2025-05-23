import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: '', redirectTo: 'body', pathMatch: 'full' },
    // {path: '', component: HeaderComponent},
  { path: 'body', component: BodyComponent },
  { path: 'about', component: AboutComponent },
  {path: 'project', component: ProjectComponent},
  {path: 'contact', component: ContactComponent},

];
