import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Topbar } from './topbar/topbar';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { NavMenu } from './nav-menu/nav-menu';
import { HeroHeader } from './hero-header/hero-header';
import { Projects } from './projects/projects';
import { Services } from './services/services';
import { Footer } from './footer/footer';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    Topbar, Home, About, Contact, 
    NavMenu, HeroHeader, Projects, Services, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Pertemuan_2';
}