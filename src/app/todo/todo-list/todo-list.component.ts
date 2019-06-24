import { Component, OnInit, Input } from '@angular/core';
import { Faire } from '../model/faire';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input()
  taches:Array<Faire> ;

  isEmpty() {
    if(this.taches === []) {
      return true
    } else return false
  }

  constructor() { }

  ngOnInit() {
    
  }

}
