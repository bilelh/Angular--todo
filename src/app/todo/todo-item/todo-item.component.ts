import { Component, OnInit, Input } from '@angular/core';
import { Faire } from '../model/faire';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  tache:Faire ;
  
  barre:string ;

  handleCheckBoxChange() {
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
