import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  write(logMessage)
  {
    console.log(logMessage);
  }
  constructor() { }
}
