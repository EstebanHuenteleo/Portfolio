import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar';
import { ProfileComponent } from '../profile/profile';
import { ExperiencesComponent } from '../experiences/experiences';
import { SkillsComponent } from '../skills/skills';
import { ContactComponent } from '../contact/contact';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, ProfileComponent, ExperiencesComponent, SkillsComponent, ContactComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {}
