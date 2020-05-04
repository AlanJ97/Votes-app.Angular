import { Component } from '@angular/core';
import { Link } from './link/link.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  links: Link[];
  constructor(){
    this.links = [
      new Link('Angular', 'https://angular.io', 12),
      new Link('Google', 'https://google.com', 122),
      new Link('Facebook', 'https://facebook.com', 18)
    ];
  }
  addLink(title: HTMLInputElement, link: HTMLInputElement){
    this.links.push(new Link(title.value, link.value));
    title.value = '';
    link.value = '';
    return false;
  }
}
