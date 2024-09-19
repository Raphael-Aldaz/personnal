import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from "../navigation/navigation.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavigationComponent],
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
