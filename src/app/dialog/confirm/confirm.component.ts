import { Component, Optional, Inject, OnInit } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
@Component({
  template :
  `
    <h1 md-dialog-title>
      <div style="display:flex; align-items :center">
        <i class="material-icons" style="color : rgb(228,155,15)">help_outline</i>{{title}}
      </div>
    </h1>
    <md-dialog-content>
      <!-- https://angular.io/guide/template-syntax#!#property-binding-or-interpolation- -->
      <div [innerHTML]="content"></div>
    </md-dialog-content>

    <!-- ボタンの配置 -->
    <!-- <md-dialog-actions> --><!-- 左 left -->
    <md-dialog-actions  style="justify-content:center"><!-- 中央 center -->
    <!-- <md-dialog-actions style="justify-content:flex-end"> --><!-- 右 right -->
      <button md-button [md-dialog-close]="'cancel'">cancel</button>
      <button md-button [md-dialog-close]="'ok'">OK</button>
    </md-dialog-actions>
  `
})
export class ConfirmComponent implements OnInit {

  public title: string;
  public content: string;

  constructor(
    @Inject(MD_DIALOG_DATA) public data: any,
    public dialogRef: MdDialogRef<ConfirmComponent>
  ) { }

  ngOnInit(): void {
    const config = this.data;
    this.title = config.title;
    this.content = config.content;
  }
}
