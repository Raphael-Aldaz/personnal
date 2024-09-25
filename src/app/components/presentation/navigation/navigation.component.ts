import { Component, ElementRef, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ContentComponent } from "../content/content.component";

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink, ContentComponent, RouterLinkActive, RouterOutlet],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent implements OnInit {
  navigationItems = [
    {name: 'Home', route: '/home',color:"--tomato-color"},
    {name: 'About', route: '/about', color:"--yellow-color"},
    {name: 'Work', route: '/work', color:"--green-color"},
    {name: 'Contact', route: '/contact', color:"--blue-color"}
  ]

  constructor() {

  }
  ngOnInit(): void {

  }


}
