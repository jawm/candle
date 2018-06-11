import { DatapointEntryComponent } from './datapoint-entry/datapoint-entry.component';
import { NewMetricComponent } from './new-metric/new-metric.component';
import { CallbackComponent } from './callback/callback.component';

export const ROUTES = [
  {path: 'enter-datapoint', component: DatapointEntryComponent},
  {path: 'create-datapoint', component: NewMetricComponent},
  {path: 'callback', component: CallbackComponent}
];
