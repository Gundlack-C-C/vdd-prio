import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-csv',
  templateUrl: './csv.component.html',
  styleUrls: ['./csv.component.css']
})
export class CSVComponent implements OnInit {
  fileName: string | undefined = undefined;
  data: string | undefined = undefined;
  dataJSON: {"heading": string[], "rows": string[][]} | undefined = undefined;
  delimiter: string = ";";
  heading: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  onFileSelected(event: any) {
    const file:File = event.target.files[0];

    if(file) {
      console.log(file.name);
      console.log(file.size);
      console.log(file.type);
      this.fileName = file.name;

      let reader: FileReader = new FileReader();
      reader.readAsText(file);
      reader.onload = (e) => {
        let csv: string = reader.result as string;

        this.data = csv.split("\r").join("");
        var rows = this.data.split("\n").map((line: string) => {
          return line.split(this.delimiter)
        });

        this.dataJSON = {
          "heading": this.heading ? rows[0] : [],
          "rows": rows.slice(this.heading ? 1 : 0, rows.length -1)
        }
      }
    }
  }
}
