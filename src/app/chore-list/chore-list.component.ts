import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ChoresService } from '../chores/chores.service';
import { Chore } from '../chores/chore.model';

@Component({
  selector: 'app-chore-list',
  templateUrl: './chore-list.component.html',
  styleUrls: ['./chore-list.component.css']
})
export class ChoreListComponent implements OnInit {

  chores: Array<Chore> = [];

  constructor(
    private readonly choreService: ChoresService,
  ) { }

  async ngOnInit() {
    this.chores = await this.choreService.getChores();
    this.chores = this.sortChores(this.chores);
  }

  async drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.chores, event.previousIndex, event.currentIndex);
    this.chores = this.updateChoreListPositions(this.chores);
    await this.choreService.saveChores(this.chores);
  }

  updateChoreListPositions(chores: Array<Chore>) {
    chores.forEach((chore: Chore, index: number) => {
      chore.listPosition  = index;
    });
    return chores;
  }

  sortChores(chores: Array<Chore>) {
    return chores.sort((a, b) => {
      return a.listPosition - b.listPosition;
    });
  }

}
