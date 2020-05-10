import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-chore-list',
  templateUrl: './chore-list.component.html',
  styleUrls: ['./chore-list.component.css']
})
export class ChoreListComponent implements OnInit {

  chores = [];

  constructor() { }

  ngOnInit() {
    this.chores = [
      { description: 'Wash Sheets' },
      { description: 'Clean Toilets' },
      { description: 'Clean Bathrooms' },
      { description: 'Vacuum' },
      { description: 'Wash Towels' },
    ];
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.chores, event.previousIndex, event.currentIndex);
  }

}
