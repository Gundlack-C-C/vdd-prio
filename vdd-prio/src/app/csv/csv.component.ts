import { Component, OnInit } from '@angular/core';
import { CSVService } from './csv.service';

@Component({
  selector: 'app-csv',
  templateUrl: './csv.component.html',
  styleUrls: ['./csv.component.css']
})
export class CSVComponent implements OnInit {

  get dataJSON(): any | undefined {
    return this.csv.data;
  }

  constructor(private csv: CSVService) { }

  ngOnInit() {
  }

  onFileSelected(event: any) {
    const file:File = event.target.files[0];

    if(file) {
      console.log(file.name);
      console.log(file.size);
      console.log(file.type);

      let reader: FileReader = new FileReader();
      reader.readAsText(file);
      reader.onload = (e) => {
        this.csv.DATA = reader.result as string;
      }
    }
  }
}
