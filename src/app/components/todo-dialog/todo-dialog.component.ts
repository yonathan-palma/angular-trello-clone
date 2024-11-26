import { Component, Inject } from '@angular/core';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';

//icons
import { faClose, faCheckToSlot, faBars, faUser, faTag, faCheckSquare, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BtnComponent } from '../btn/btn.component';
import { toDo } from '../../models/todo.model';

interface  InputData {
  todo: toDo; 
}

interface  OutputData {
  res: boolean; 
}


@Component({
  selector: 'app-todo-dialog',
  standalone: true,
  imports: [FontAwesomeModule, BtnComponent],
  templateUrl: './todo-dialog.component.html'
})
export class TodoDialogComponent {
  constructor(
    private dialogRef: DialogRef<OutputData>,
    @Inject(DIALOG_DATA) private data: InputData
  ) { 
    this.todo = data.todo;
  }

  todo!: toDo;

  faClose = faClose;
  faCheckToSlot = faCheckToSlot;
  faBars = faBars;
  faUser = faUser;
  faTag = faTag;
  faCheckSquare = faCheckSquare;
  faClock = faClock;

  closeDialog() {
    this.dialogRef.close({
      res: true
    });
    console.log('close dialog');
  }

  closeWithRes(res: boolean){
    this.dialogRef.close({
      res
    })
  }

}
