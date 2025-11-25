import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './data-binding.html',
  styleUrls: ['./data-binding.css'],  // fixed typo from 'styleUrl' to 'styleUrls'
})
export class DataBinding {
  title = 'Hello World';
  message = 'Data Binding Demo'; // text interpolation
  imageUrl = "https://media.tenor.com/1W-HKNvj8UoAAAAM/cat.gif";
  w = 500;
  h = 500;
  isHighlighted = true;
  textColor = 'blue';
  yourName = '';

  count = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  // Interpolation
  studentName ="Your name here";
  score = 95;

  // Property binding
  imageUrl2 = "https://picsum.photos/200";
  isDisabled = true;

  // Attribute binding
  colSpanValue = 3;

  //Class binding
  isPassing = true;

  // Style binding
  boxColor = "purple";
  boxSize = "150px";
}
