import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Book } from '../info-table/book';

@Component({
  selector: 'app-view-only',
  templateUrl: './view-only.component.html',
  styleUrls: ['./view-only.component.scss']
})
export class ViewOnlyComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ViewOnlyComponent>) { }
    rowObj = new Book();
  ngOnInit(): void {
    if (this.data && this.data.item) {
      this.rowObj = this.data.item;
    }
  }

}
