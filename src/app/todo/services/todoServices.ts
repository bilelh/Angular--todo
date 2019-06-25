import { Faire } from '../model/faire';
import { Injectable } from '@angular/core';
import TodoApi from './todo.api';
import _ from 'lodash';

@Injectable({providedIn: 'root'})
export default class TodoServices {
    
    constructor(private todoApi : TodoApi){}

    private todoList: Array<Faire> ;

    getTache () : Promise<Array<Faire>> {
        return new Promise (resolve => {
            this.todoApi.fetchTodo()
                .then(data => {
                    this.todoList = data;
                    resolve(this.todoList)
                })
        })
    }

    addNewTache (title: string): Promise<Array<Faire>> {
        return new Promise (resolve => {
            this.todoList = [...this.todoList, new Faire(this.todoList.length + 1, title, false)];
            resolve(this.todoList)
        })
    }

    removeTaches () : Promise<Array<Faire>> {
        return new Promise (resolve => {
            this.todoList = []
            resolve(this.todoList)
        })
    }

    updateTache(tache:Faire) : Promise<Array<Faire>> {
        return new Promise (resolve => {
            const update = this.todoList.find(t => t.id === tache.id);
            update.isDone = !update.isDone;
            console.log(update.isDone);
            this.todoList =[..._.without(this.todoList, update) , {...update}];
            this.todoList.sort((a, b) => a.id - b.id);
            resolve(this.todoList)
        })
    }
}

