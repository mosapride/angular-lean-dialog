import { DialogComponent, DialogConfirm } from './dialog/confirm/dialog.component';
import { Component, NgModule } from '@angular/core';
import { MdDialog, MdDialogConfig } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  dialog: DialogConfirm;

  title: string;
  content: string;
  rtnVal: string;

  constructor(
    private mdDialog: MdDialog
  ) {
    this.dialog = new DialogConfirm(mdDialog);
  }

  confirm() {
    this.dialog.confirm(this.title, this.content).subscribe(rtn => {
      if (rtn) {
        this.rtnVal = rtn + '';
        console.log('ok');
      } else {
        this.rtnVal = rtn + '';
        console.log('cancel or undefined');
      }
    });
  }

  error() {
    this.dialog.error(this.title, this.content).subscribe(rtn => {
      if (rtn) {
        this.rtnVal = rtn + '';
        console.log('ok');
      } else {
        this.rtnVal = rtn + '';
        console.log('cancel or undefined');
      }
    });
  }

  info() {
    this.dialog.info(this.title, this.content).subscribe(rtn => {
      if (rtn) {
        this.rtnVal = rtn + '';
        console.log('ok');
      } else {
        this.rtnVal = rtn + '';
        console.log('cancel or undefined');
      }
    });
  }

  warning() {
    this.dialog.warning(this.title, this.content).subscribe(rtn => {
      if (rtn) {
        this.rtnVal = rtn + '';
        console.log('ok');
      } else {
        this.rtnVal = rtn + '';
        console.log('cancel or undefined');
      }
    });
  }
}
