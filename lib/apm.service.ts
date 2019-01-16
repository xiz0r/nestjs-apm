import { Injectable } from '@nestjs/common';
import * as APM from 'elastic-apm-node';

@Injectable()
export class ApmService {
  apm: any;

  constructor() {
    this.apm = APM;
  }

  captureError(data: any) {
    this.apm.captureError(data);
  }

  startTransaction(name, type): any {
    return this.apm.startTransaction(name, type);
  }

  setTransactionName(name) {
    return this.apm.setTransactionName(name);
  }

  startSpan(name) {
    return this.apm.startSpan(name);
  }
}
