import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-datapoint-entry',
  templateUrl: './datapoint-entry.component.html',
  styleUrls: ['./datapoint-entry.component.scss']
})
export class DatapointEntryComponent implements OnInit {

  @Input() datapoints: DataPoint[] = [];

  constructor() { }

  ngOnInit() {}

  logType(event: Event) {
    console.log(event.srcElement.attributes.getNamedItem('type'));
  }
}

export interface DataPoint {
  fieldName: string;
  fieldType: FieldType;
  fieldUnit: string;
}

export enum FieldType {
  Number = 'number',
  Text = 'text',
  Date = 'date',
}

