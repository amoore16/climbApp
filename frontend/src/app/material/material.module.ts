// Basic Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Material Module Imports
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule
  ],
  exports: [
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule
  ]
})
export class MaterialModule { }
