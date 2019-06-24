import { Component, AfterViewInit, ViewChild, ElementRef  } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.css']
})


export class SheetComponent implements AfterViewInit {
  title = "Draw/describe this thing!"

@ViewChild('canvasSheet')canvasSheet: ElementRef;

public context: CanvasRenderingContext2D;

  constructor() { }

  
  ngAfterViewInit(): void {
    this.context = (this.canvasSheet.nativeElement as HTMLCanvasElement).getContext('2d');
  }

}
