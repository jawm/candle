import {Component, OnInit} from '@angular/core';
import {DataPoint,  FieldType} from './datapoint-entry/datapoint-entry.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  datapoints: DataPoint[] = [];

  constructor() {
  }

  ngOnInit() {
    this.datapoints.push({fieldName: 'Date', fieldType: FieldType.Date, fieldUnit: ''});
    this.datapoints.push({fieldName: 'Weight', fieldType: FieldType.Number, fieldUnit: 'kg'});
  }

}
