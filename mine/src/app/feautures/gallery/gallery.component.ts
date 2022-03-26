import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../core/gallery.service';
import { IFish } from '../../core/interfaces';
import {GalleryItemComponent} from '../gallery-item/gallery-item.component'
import { ActivatedRoute } from '@angular/router';
import { AuthModule } from 'src/app/auth/auth.module';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
fishes!: IFish[]
  constructor(private galleryService: GalleryService) { }

  ngOnInit(): void {
    this.galleryService.getAllCatches$().subscribe(
      data=>{
        this.fishes = Object.values(data).sort((a, b)=>{
          return b.weight-a.weight
        });
        console.log(data)
      }
    )
  }

}
