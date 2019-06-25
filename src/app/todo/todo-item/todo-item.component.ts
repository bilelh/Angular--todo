import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Faire } from '../model/faire';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  private barre:string ;

  @Input()
  tache:Faire ;
  
  @Output()
  check:EventEmitter<Faire> = new EventEmitter<Faire>();

  handleCheckbox() {
    this.check.emit(this.tache);
    this.tache.isDone = !this.tache.isDone;
    if(this.tache.isDone ===false) {
      this.barre = 'none';
    }else {
      this.barre = 'line-through';
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
