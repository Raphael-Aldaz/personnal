import { Routes } from '@angular/router';
import { AppComponent } from './components/main/app.component';
import { ContentComponent } from './components/presentation/content/content.component';
import { AboutComponentComponent } from './components/presentation/content/about.component/about.component.component';
import { WorkComponentComponent } from './components/presentation/content/work.component/work.component.component';
import { ContactComponentComponent } from './components/presentation/content/contact.component/contact.component.component';

export const routes: Routes = [
  {path: 'home', component: ContentComponent},
  {path: 'about', component: AboutComponentComponent},
  {path: 'work', component: WorkComponentComponent},
  {path: 'contact', component: ContactComponentComponent}
];
