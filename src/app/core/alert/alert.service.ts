import { Injectable, EventEmitter } from '@angular/core';

/** Models */
import { Alert } from './alert.model';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  public alertEvent: EventEmitter<Alert>;

  constructor() {
    this.alertEvent = new EventEmitter();
  }

  alert(alertEvent: Alert) {
    this.alertEvent.emit(alertEvent);
  }
}
