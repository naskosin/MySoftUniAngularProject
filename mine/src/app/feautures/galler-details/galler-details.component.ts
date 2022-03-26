import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/app/core/gallery.service';
import { ActivatedRoute } from '@angular/router';
import { IFish } from 'src/app/core/interfaces';

@Component({
  selector: 'app-galler-details',
  templateUrl: './galler-details.component.html',
  styleUrls: ['./galler-details.component.css']
})
export class GallerDetailsComponent implements OnInit {
fish!: IFish;
id!: string;

  constructor(private galleryService: GalleryService, private activeSnapshot: ActivatedRoute) { 
    this.id = this.activeSnapshot.snapshot.params['fishid'];
    this.galleryService.getCatchOne(this.id).subscribe(
      data=>{
        this.fish = data
      }
    )
    console.log(this.id)
  }

  ngOnInit(): void {
  }

}
