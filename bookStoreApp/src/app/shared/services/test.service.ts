import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable({
  "providedIn": "root"
}

)
export class TestService {

  constructor() { }

  public status: boolean = false;

}
