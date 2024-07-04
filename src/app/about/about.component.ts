import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  users = [
    { id: 1, name: 'Bambi' },
    { id: 2, name: 'Rohimat' },
    { id: 3, name: 'Ebuka' },
    { id: 4, name: 'Samuel' },
    { id: 5, name: 'Jude' },
  ];
}
