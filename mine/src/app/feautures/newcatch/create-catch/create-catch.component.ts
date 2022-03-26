import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-catch',
  templateUrl: './create-catch.component.html',
  styleUrls: ['./create-catch.component.css']
})
export class CreateCatchComponent implements OnInit, AfterViewInit {
  @ViewChild('myForm') myForm!: NgForm;

  constructor() { }
  ngAfterViewInit(): void {
    
  }
  
  
  ngOnInit(): void {
  }

}
