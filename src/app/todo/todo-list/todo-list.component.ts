import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Faire } from '../model/faire';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input()
  taches:Array<Faire> ;

  @Output()
  checkChange = new EventEmitter<Faire>();

  handleCheckChange(tache: Faire) {
    this.checkChange.emit(tache);
  }



  isEmpty() {
    if(this.taches === []) {
      return true
    } else return false
  }

  constructor() { }

  ngOnInit() {
    
  }

}
