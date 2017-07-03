import { ConfirmComponent } from './dialog/confirm/confirm.component';
import { Component, NgModule } from '@angular/core';
import { MdDialog, MdDialogConfig } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  content: string;
  confirmReturn: string;

  constructor(
    private dialog: MdDialog
  ) {
  }

  button1() {
    const config = new MdDialogConfig();
    config.data = {
      title: this.title,
      content: this.content
    }
    const ref = this.dialog.open(ConfirmComponent, config);
    ref.afterClosed().subscribe(rtn => this.confirmReturn = rtn);
  }

  button2() {
    const config = new MdDialogConfig();
    config.data = {
      title: this.title,
      content: this.content
    }
    const ref = this.dialog.open(ConfirmComponent, config);
    ref.afterClosed().subscribe(rtn => {
      switch (rtn) {
        case 'ok':
          this.confirmReturn = '(*`･ω･)ゞOK ';
          break;
        case 'cancel':
          this.confirmReturn = '(´・ω・`) cance...';
          break;
        default:
          this.confirmReturn = '(`ω´) undefined';
          break;
      }
    });
  }

  button3() {
    const config = new MdDialogConfig();
    config.data = {
      title: 'PPAP',
      content: '<ul><li>i have a pen</li><li>i have an apple</li><li>ummm....</li><li><b>APPLE PEN!!!</b></li></ul>'
    }
    const ref = this.dialog.open(ConfirmComponent, config);
    ref.afterClosed().subscribe(rtn => this.confirmReturn = 'PPAP!!!!');
  }
}
