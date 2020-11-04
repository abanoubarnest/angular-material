import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-confirm-messagge',
  templateUrl: './confirm-messagge.component.html',
  styleUrls: ['./confirm-messagge.component.scss']
})
export class ConfirmMessageComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfirmMessageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
