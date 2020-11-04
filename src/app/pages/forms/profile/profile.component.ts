import { AfterViewInit, Component, HostBinding } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Info, Info2 } from '.';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  @HostBinding('class.mdl-grid') public readonly mdlGrid = true;
  @HostBinding('class.mdl-cell') public readonly mdlCell = true;
  @HostBinding('class.mdl-cell--12-col-desktop') public readonly mdlCell12ColDesktop = true;
  @HostBinding('class.mdl-cell--12-col-tablet') public readonly mdlCell12ColTablet = true;
  @HostBinding('class.mdl-cell--4-col-phone') public readonly mdlCell4ColPhone = true;
  @HostBinding('class.mdl-cell--top') public readonly mdlCellTop = true;
  person: Info = new Info();
  person2: Info2 = new Info2();
  constructor(private dialog: MatDialog,) {

  }
  openDialagInfo() {
    const dialogRef = this.dialog.open(EditProfileComponent, {
      width: "50%",
      // height: "60%",
      data: {
        item: { info: JSON.parse(JSON.stringify(this.person)), first: true }
      }
    });

    dialogRef.afterClosed().subscribe(data => {
      if (data) {

        this.person = data;
      }

    });
  }
  openDialagInfo2() {
    const dialogRef = this.dialog.open(EditProfileComponent, {
      width: "50%",
       height: "90%",
      data: {
        item: { info: JSON.parse(JSON.stringify(this.person2)), first: false }
      }
    });

    dialogRef.afterClosed().subscribe(data => {
      if (data) {

        this.person2 = data;

      }

    });
  }
}
