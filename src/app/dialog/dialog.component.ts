import { Component, Inject, OnInit } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA, MdDialog, MdDialogConfig } from '@angular/material';
import { Observable } from 'rxjs/Observable';
@Component({
  template:
  `
  <h1 md-dialog-title>
    <div style="display:flex; align-items :center">
      {{buttonPosition}}<i *ngIf="iconName" class="material-icons" [style.color]="defaltIconColor">{{iconName}}</i>{{title}}
    </div>
  </h1>
  <md-dialog-content>
    <div [innerHTML]="content"></div>
  </md-dialog-content>

  <md-dialog-actions [style.justify-content]="positionStyle">
    <div *ngIf="dialogPattern === 'confirm'" >
      <button md-button [md-dialog-close]="false">cancel</button>
      <button md-button [md-dialog-close]="true">OK</button>
    </div>
    <div *ngIf="dialogPattern === 'error' || dialogPattern === 'warning' || dialogPattern === 'info'" >
      <button md-button [md-dialog-close]="true">close</button>
    </div>
  </md-dialog-actions>
  {{buttonPosition}}
  `
})
export class DialogComponent implements OnInit {

  dialogPattern: ('confirm' | 'warning' | 'error' | 'info');

  iconName: string;
  iconColor: string;
  defaltIconColor = 'rgba(20, 20, 20, 0.7)';
  title: string;
  content: string;
  buttonPosition: ('left' | 'center' | 'right');
  positionStyle: string;
  defaltButtonPosition: ('left' | 'center' | 'right') = 'center';
  constructor(
    @Inject(MD_DIALOG_DATA) public data: any,
    public dialogRef: MdDialogRef<DialogComponent>
  ) { }

  ngOnInit(): void {
    const config = this.data;
    this.iconName = config.iconName;
    if (!config.iconColor) {
      this.iconColor = this.defaltIconColor;
    }
    this.title = config.title;
    this.content = config.content;
    switch (config.buttonPosition) {
      case 'left':
        this.positionStyle = '';
        break;
      case 'center':
        this.positionStyle = 'justify-content:center';
        break;
      case 'rigth':
        this.positionStyle = 'justify-content:flex-end';
        break;
      default:
        this.positionStyle = '';
    }

    if (!config.dialogPattern) {
      throw new Error('dialogPattern is not declaration');
    }
    this.dialogPattern = config.dialogPattern;
  }
}
/**
 * Dialog Wrapper
 *
 * Angular Materialを利用したDialog.
 *
 * example
 * ```
 * // << component class - global area
 * dialog: Dialog;
 * // >>
 *
 * // << conponent class - counstracter
 * constructor( private mdDialog: MdDialog ) {
 *   this.dialog = new Dialog(mdDialog);
 * }
 * // >>
 * ```
*/
export class Dialog {
  private dialog;
  constructor(dialog: MdDialog) {
    this.dialog = dialog;
  }

  /**
   * 確認ダイアログ
   *
   * example
   * ```
   * this.dialog.confirm('タイトル', '内容').subscribe(rtn => {
   *   if (rtn) {
   *     console.log('ok')
   *   } else {
   *     console.log('cancel or undefined(Esc key or Click outside the dialog)')
   *   }
   * });
   * ```
   *
   * @param {string} title ダイアログのタイトル
   * @param {string} content ダイアログの内容
   * @returns {Observable<boolean>} true:OK, false:cancel, undefined:ESC,Click outside the dialog
   * @memberof Dialog
   */
  public confirm(title: string, content: string): Observable<boolean> {
    const config = new MdDialogConfig();
    config.data = {
      title: title,
      content: content,
      iconName: 'help_outline',
      dialogPattern: 'confirm'
    }
    const ref = this.dialog.open(DialogComponent, config);
    return ref.afterClosed();
  }

  /**
   * エラーダイアログ
   *
   * example
   * ```
   * this.dialog.error('タイトル', '内容').subscribe(rtn => {
   *   if (rtn) {
   *     console.log('ok')
   *   } else {
   *     console.log('cancel or undefined(Esc key or Click outside the dialog)')
   *   }
   * });
   * ```
   * @param {string} title ダイアログのタイトル
   * @param {string} content ダイアログの内容
   * @returns {Observable<boolean>} true:close, undefined:ESC,Click outside the dialog
   * @memberof Dialog
   */
  public error(title: string , content: string): Observable<boolean> {
    const config = new MdDialogConfig();
    config.data = {
      title : title,
      content : content,
      iconName : 'highlight_off',
      dialogPattern : 'error'
    }
    const ref = this.dialog.open(DialogComponent , config);
    return ref.afterClosed();
  }

  /**
   * 情報ダイアログ
   *
   * example
   * ```
   * this.dialog.info('タイトル', '内容').subscribe(rtn => {
   *   if (rtn) {
   *     console.log('ok')
   *   } else {
   *     console.log('cancel or undefined(Esc key or Click outside the dialog)')
   *   }
   * });
   * ```
   * @param {string} title ダイアログのタイトル
   * @param {string} content ダイアログの内容
   * @returns {Observable<boolean>} true:close, undefined:ESC,Click outside the dialog
   * @memberof Dialog
   */
  public info(title: string , content: string): Observable<boolean> {
    const config = new MdDialogConfig();
    config.data = {
      title : title,
      content : content,
      iconName : 'info_outline',
      dialogPattern : 'info'
    }
    const ref = this.dialog.open(DialogComponent , config);
    return ref.afterClosed();
  }

  /**
   * 警告ダイアログ
   *
   * example
   * ```
   * this.dialog.warning('タイトル', '内容').subscribe(rtn => {
   *   if (rtn) {
   *     console.log('ok')
   *   } else {
   *     console.log('cancel or undefined(Esc key or Click outside the dialog)')
   *   }
   * });
   * ```
   * @param {string} title ダイアログのタイトル
   * @param {string} content ダイアログの内容
   * @returns {Observable<boolean>} true:close, undefined:ESC,Click outside the dialog
   * @memberof Dialog
   */
  public warning(title: string , content: string): Observable<boolean> {
    const config = new MdDialogConfig();
    config.data = {
      title : title,
      content : content,
      iconName : 'warning',
      dialogPattern : 'warning'
    }
    const ref = this.dialog.open(DialogComponent , config);
    return ref.afterClosed();
  }
}
