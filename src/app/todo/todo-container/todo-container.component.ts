import { Component, OnInit } from '@angular/core';
import { Faire } from '../model/faire';
import _ from 'lodash';
import TodoServices from '../services/todoServices';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit {

  todoList: Array<Faire> = [];

  constructor(private todoServices:TodoServices) { }

  addNewTache(title: string) {
    this.todoServices.addNewTache(title)
      .then((item) => {this.todoList = item})
  }

  removeTaches() {
    this.todoServices.removeTaches()
      .then((item) => {this.todoList = item})
  }

  updateTache(tache:Faire) {
    this.todoServices.updateTache(tache)
      .then((item) => {this.todoList = item})
  }

  ngOnInit() {
    this.todoServices.getTache()
      .then((item) => {
        this.todoList = item
        console.log(this.todoList)
      })
     
  }
}
