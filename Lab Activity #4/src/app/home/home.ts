import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
  name = 'Julien Michael P. Punsalan';
  title = 'Web Developer & IT Enthusiast';
  description = `Welcome to my portfolio website! Here you can explore my projects, learn about my skills in Angular, Web Development, and IT, and see some of my personal works.`;
  photoUrl = 'https://media.licdn.com/dms/image/v2/D5603AQFFtXxygRmYFw/profile-displayphoto-scale_200_200/B56ZhHPSjKG4AY-/0/1753541848061?e=2147483647&v=beta&t=Tjiq4ExwLgR8UnqbPr8fhf8I5dsY7sCQxoWPU8tJwCw'; // replace with your real photo URL
}
