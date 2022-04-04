import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/app/core/gallery.service';
import { IFish } from 'src/app/core/interfaces';

@Component({
  selector: 'app-top-five',
  templateUrl: './top-five.component.html',
  styleUrls: ['./top-five.component.css']
})
export class TopFiveComponent implements OnInit {
fishes!: IFish[];
  constructor(public galleryService: GalleryService) { }

  ngOnInit(): void {
    this.galleryService.getAllCatches$().subscribe(
      data=>{
        this.fishes = data.sort((a, b)=>{
          return b.weight-a.weight
        });
        console.log(data);
     
      }
    )
  }

}
