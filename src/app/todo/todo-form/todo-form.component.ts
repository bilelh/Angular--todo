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
  newTache:EventEmitter<string> = new EventEmitter<string>();

  @Output()
  removeTache:EventEmitter<void> = new EventEmitter<void>();

  newTacheAdded() {
    this.newTache.emit(this.title);
    }

  tacheRemoved() {
    this.removeTache.emit();
  }

  titleChanged(event) {
    this.title=event.target.value;
  }

  constructor() { }

  ngOnInit() {
  }

}
