import { Color, NgxMatColorCollectionComponent } from '@angular-material-components/color-picker';
import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Book } from './book';

@Component({
  selector: 'app-info-table',
  templateUrl: './info-table.component.html',
  styleUrls: ['./info-table.component.scss'],
})
export class InfoTableComponent implements OnInit {
  rowObj = new Book();
  col: Color;

  title = 'add Item';
  public disabled = false;
  public color: ThemePalette = 'primary';
  public touchUi = false;
  icon: any;
  myFormGroup: FormGroup;
  iconCss = new FormControl();
  fallbackIcon = 'fas fa-user';
  colorCtr = new FormControl(null);
  public gender = 'Male';
  genderList = ['Male', 'Female'];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<InfoTableComponent>) { }

  ngOnInit(): void {
    // this.rowObj = { color: '', created_at: null, iconName: '', id: null, qnty: null, title: '', updated_at: null };
    if (this.data && this.data.item) {
      this.rowObj = this.data.item;
      this.title = 'Edit Item';
      const s = this.hexToRgb(this.rowObj.color);
      this.col = new Color(s.r, s.g, s.b);
      this.colorCtr.setValue(this.col);
    }
  }
  hexToRgb(hex) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    } : null;
  }
  onIconPickerSelect(icon) {
    this.rowObj.iconName = icon;
    this.iconCss.setValue(icon);
  }
  save() {
    this.color;
    if (this.colorCtr.value) {
      this.rowObj.color = '#' + this.colorCtr.value['hex'];
    }
    this.dialogRef.close(this.rowObj);

  }
  preSelect(c1, c2): boolean {
    return c1 && c2 ? c1 === c2 : c1 === c2;
  }
}
