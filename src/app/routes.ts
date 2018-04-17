import {DatapointEntryComponent} from './datapoint-entry/datapoint-entry.component';
import {NewMetricComponent} from './new-metric/new-metric.component';

export const ROUTES = [
  {path: 'enter-datapoint', component: DatapointEntryComponent},
  {path: 'create-datapoint', component: NewMetricComponent}
];
