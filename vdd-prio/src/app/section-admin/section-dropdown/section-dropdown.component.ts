import { Component, Input, OnChanges, SimpleChanges, EventEmitter, Output} from '@angular/core';
import { Section } from '../section-admin.service';

@Component({
  selector: 'app-section-dropdown',
  templateUrl: './section-dropdown.component.html',
  styleUrls: ['./section-dropdown.component.css']
})
export class SectionDropdownComponent implements OnChanges{
  @Input() items: Section[] = []
  @Output() onSelected = new EventEmitter<Section>()
  @Output() onNew = new EventEmitter()
  selected: Section = new Section("")


  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    this.SELECTED = this.items[0]
  }

  set SELECTED(val: Section) {
    this.selected = val;
    this.onSelected.next(this.selected)
  }
}
