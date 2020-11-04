import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Info, Info2 } from '../profile';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  person: Info = new Info();
  person2: Info2 = new Info2();
  fileToUpload: File;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<EditProfileComponent>,) { }

  ngOnInit(): void {
    if (this.data && this.data.item.info && this.data.item.first) {
      this.person = this.data.item.info
    }
    else if (this.data && this.data.item && !this.data.item.first) {
      this.person2 = this.data.item.info

    }
  }
  save() {
    if(this.data.item.first){
      this.dialogRef.close(this.person);

    }
    else{
      this.dialogRef.close(this.person2);

    }
  }
  onFileChange(file: FileList) {
    this.fileToUpload = file.item(0);
    // var label = document.getElementById('span-file');
    // label.textContent = this.fileToUpload.name;

    //Show image preview
    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.person2.image = event.target.result;

    }
    reader.readAsDataURL(this.fileToUpload);
  }
}
