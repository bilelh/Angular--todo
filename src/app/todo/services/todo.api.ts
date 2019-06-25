import { Injectable } from '@angular/core';
import { Faire } from '../model/faire';


@Injectable({providedIn: 'root'})
export default class TodoApi {
    fetchTodo(): Promise<Array<Faire>> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    new Faire(1, 'manger', false),
                    new Faire(2, 'jouer', false),
                    new Faire(3, 'dormir', false)
                ])
            }, 1000);
        });
    }
}
