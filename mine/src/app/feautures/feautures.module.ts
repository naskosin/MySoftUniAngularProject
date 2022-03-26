import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery/gallery.component';
import { RouterModule } from '@angular/router';
import {GalleryRoutingModule} from './gallery.routing.module'
import { GalleryItemComponent } from './gallery-item/gallery-item.component';
import { FormsModule } from '@angular/forms';
import { CreateCatchComponent } from './newcatch/create-catch/create-catch.component';



@NgModule({
  declarations: [GalleryComponent, GalleryItemComponent, CreateCatchComponent],
  imports: [
    CommonModule,
    RouterModule,
    GalleryRoutingModule,
    FormsModule
  ],
  exports: [GalleryComponent,CreateCatchComponent ]
})
export class FeauturesModule { }
