import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Faire } from '../model/faire';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  title:string;

  @Output()
  newtache:EventEmitter<string> = new EventEmitter<string>();

  newTacheAdded() {
    this.newtache.emit(this.title);
    }
    
  titleChanged(event) {
    this.title=event.target.value;
  }

  constructor() { }

  ngOnInit() {
  }

}
