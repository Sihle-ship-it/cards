import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      imgeUrl: 'assets/tree.jpeg',
      username: 'nature',
      content: 'I saw this neat tree today',
    },
    {
      title: 'Snowy Mountain',
      imgeUrl: 'assets/mountain.jpeg',
      username: 'mountainLover',
      content: 'Here is the picture of snowy mountain',
    },
    {
      title: 'Mountain Biking',
      imgeUrl: 'assets/biking.jpeg',
      username: 'biker12222',
      content: 'I some biking today',
    },
    {
      title: 'Mountain Biking',
      imgeUrl: 'assets/biking.jpeg',
      username: 'biker12222',
      content: 'I some biking today',
    },
  ];
}
