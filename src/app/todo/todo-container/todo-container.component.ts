import { Component, OnInit } from '@angular/core';
import { Faire } from '../model/faire';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit {

  todoList:Array<Faire> = [];
  
  constructor() { }

  ngOnInit() {
    this.todoList = [
      new Faire(1 , 'se reveiller' , false) ,
      new Faire(2 , 'manger' , false) ,
      new Faire(3 , 'boire' , false) ,
      new Faire(4 , 'jouer' , false) ,
      new Faire(5 , 'dormir' , false)
    ]
  }

}
