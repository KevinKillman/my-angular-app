import { Component } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent {
  paragraphToggle = false;
  clicks = [];
  timesClicked = 0;
  displayDetailsClick() {
    this.paragraphToggle = !this.paragraphToggle;
    this.timesClicked++;
    this.clicks.push("Clicked: " + this.timesClicked);
  }

  getClickListBackground(i) {
    return i >= 4 ? 'blue' : 'white';
  }
}
