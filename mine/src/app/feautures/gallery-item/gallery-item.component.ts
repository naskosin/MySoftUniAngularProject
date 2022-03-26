import { Component, OnInit, Input } from '@angular/core';
import { IFish } from '../../core/interfaces';


@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.css']
})
export class GalleryItemComponent implements OnInit {

  constructor() { }
  @Input() fish!: IFish;

  ngOnInit(): void {
  }

}
