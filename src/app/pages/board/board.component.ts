import { Component, inject } from '@angular/core';
import {CdkDragDrop, DragDropModule, CdkDrag, CdkDropList, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import {DialogModule, DialogRef, Dialog} from '@angular/cdk/dialog';

// components
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { TodoDialogComponent } from '../../components/todo-dialog/todo-dialog.component';

import { Column, toDo } from '../../models/todo.model';
import { identifierName } from '@angular/compiler';


@Component({
  selector: 'app-board',
  standalone: true,
  imports: [
    DragDropModule, 
    NavbarComponent, 
    CommonModule, 
    CdkDrag, 
    CdkDropList,
    DialogModule
  ],
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {

  todos: toDo[] = [
  ];

  doing: toDo[] = [
  ];

  done:toDo[] = [
  ]

  columns: Column[] = [
    {
      title: 'ToDo',
      todos: [
        {
          id: '1',
          title: 'Make dishes'
        },
        {
          id: '2',
          title: 'Buy a unicorn'
        }
      ]
    },
    {
      title: 'Doing',
      todos: [
        {
          id: '3',
          title: 'Watch Angular Path in Platzi'
        }
      ]
    },
    {
      title: 'Done',
      todos: [
        {
          id: '4',
          title: 'Play video games'
        }
      ]
    }
  ];

  private dialog: Dialog = inject(Dialog);

  drop(event: CdkDragDrop<toDo[]>){
    console.log(event);
    if (event.previousContainer == event.container) {
       moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }else{
      transferArrayItem(
        event.previousContainer.data, 
        event.container.data, 
        event.previousIndex, 
        event.currentIndex
      );
    }  
  }

  dropHorizontal(event: CdkDragDrop<string[]>) {
    console.log(event);
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
  }

  addColumn(){
    this.columns.push({
      title: "new Column",
      todos: []
    })
    console.log(this.columns)
  }

  openDialog(todo: toDo){
    const dialogRef = this.dialog.open(TodoDialogComponent, {
      minWidth: '300px',
      maxWidth: '50%',
      data:{
        todo 
      }
    });
    dialogRef.closed.subscribe(output => {
      console.log(output);
    })
  }

}
