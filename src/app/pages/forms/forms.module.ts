import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule as NgFormsModule } from '@angular/forms';
import { ThemeModule } from 'theme';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ProfileComponent } from './profile/profile.component';
@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    NgFormsModule,
  ],
  declarations: [
    ProfileComponent,
    EditProfileComponent,
  ],
  entryComponents:[EditProfileComponent],
  providers: [],
})
export class FormsModule { }
