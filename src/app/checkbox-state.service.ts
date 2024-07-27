import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckboxStateService {
  private state: any = {
    button: false,
    input: false,
    password: false
  };

  getState() {
    return this.state;
  }

  setState(type: string, value: boolean) {
    if (this.state.hasOwnProperty(type)) {
      this.state[type] = value;
    }
  }
}
