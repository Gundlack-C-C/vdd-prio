import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CSVService {
  options = {
    delimiter: ";",
    heading: true
  }

  data: {
    heading: string[] | undefined,
    rows: string[][]
  } | undefined

  set DATA(val: string) {
    val = val.split("\r").join("");
    var rows = val.split("\n").map((line: string) => {
      return line.split(this.options.delimiter)
    });
    this.data = {
      heading: this.options.heading ? rows[0] : [],
      rows: rows.slice(this.options.heading ? 1 : 0, rows.length -1)
    }
  }

  constructor() { }

}
