import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from "../presentation/navigation/navigation.component";
import { PersonnalComponent } from '../personnal/personnal.component';
import { PresentationComponent } from '../presentation/presentation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PersonnalComponent, PresentationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RaphaelAldaz';
  toggleMenu(){
    const nav = document.querySelector('.nav');
    const burger = document.querySelector('.menu__hamburger');
    burger?.classList.toggle('open');
    nav?.classList.toggle('open');
  }
}
