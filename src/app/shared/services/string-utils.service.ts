import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringUtilsService {

    constructor() { }

    underscoreToCamelCased(input: string): string {
      const toUpper = (i: string) => i[1].toUpperCase();
      return input.replace(/_([a-z])/g, toUpper);
    }
}
