import { Component } from '@angular/core';

@Component({
  selector: 'app-new-metric',
  templateUrl: './new-metric.component.html',
  styleUrls: ['./new-metric.component.scss']
})
export class NewMetricComponent {

  numberOfEntries = Array(0).map((x, i) => i);

  removeDatapoint(datapoint: number) {
      this.numberOfEntries.splice(datapoint, 1);
  }

  addDatapoint() {
    const length = this.numberOfEntries.length;
    this.numberOfEntries.push(length);
  }

  updateNumberOfEntries(event) {
    const newNumOfEntries: number = +event.srcElement.value;
    this.numberOfEntries = Array(newNumOfEntries).map((x, i) => i);
  }
}
