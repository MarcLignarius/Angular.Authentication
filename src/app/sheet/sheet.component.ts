import { Component, Input, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { switchMap, takeUntil, pairwise } from 'rxjs/operators';


@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.css']
})

export class SheetComponent implements AfterViewInit {
    title = "Draw/describe this thing!"
  
  @ViewChild('canvas') public canvas: ElementRef;
  
  @Input() public width = 400;
  @Input() public height = 400;
  
  private context: CanvasRenderingContext2D;

  constructor() { }
  
  public ngAfterViewInit() {
    // get the context
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.context = canvasEl.getContext('2d');

    // set the width and height
    canvasEl.width = this.width;
    canvasEl.height = this.height;

    // set some default properties about the line
    this.context.lineWidth = 3;
    this.context.lineCap = 'round';
    this.context.strokeStyle = '#000';
    
    // we'll implement this method to start capturing mouse events
    this.captureEvents(canvasEl);
  }

  private captureEvents(canvasEl: HTMLCanvasElement) {
    // this will capture all mousedown events from the canvas element
    fromEvent(canvasEl, 'mousedown')
      .pipe(
        switchMap((e) => {
          // after a mouse down, we'll record all mouse moves
          return fromEvent(canvasEl, 'mousemove')
            .pipe(
              // we'll stop (and unsubscribe) once the user releases the mouse
              // this will trigger a 'mouseup' event    
              takeUntil(fromEvent(canvasEl, 'mouseup')),
              // we'll also stop (and unsubscribe) once the mouse leaves the canvas (mouseleave event)
              takeUntil(fromEvent(canvasEl, 'mouseleave')),
              // pairwise lets us get the previous value to draw a line from
              // the previous point to the current point    
              pairwise()
            )
        })
      )
      .subscribe((res: [MouseEvent, MouseEvent]) => {
        const rect = canvasEl.getBoundingClientRect();
  
        // previous and current position with the offset
        const prevPos = {
          x: res[0].clientX - rect.left,
          y: res[0].clientY - rect.top
        };
  
        const currentPos = {
          x: res[1].clientX - rect.left,
          y: res[1].clientY - rect.top
        };
  
        // this method we'll implement soon to do the actual drawing
        this.drawOnCanvas(prevPos, currentPos);
      });
  }
}
// import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
// import * as $ from 'jquery';

// @Component({
//   selector: 'app-sheet',
//   templateUrl: './sheet.component.html',
//   styleUrls: ['./sheet.component.css']
// })


// export class SheetComponent implements OnInit {
//   title = "Draw/describe this thing!"

// @ViewChild('canvasSheet')canvasSheet: ElementRef;

// public context: CanvasRenderingContext2D;

//   constructor() { }

  
//   ngOnInit(): void {
//     this.context = (this.canvasSheet.nativeElement as HTMLCanvasElement).getContext('2d');
//     var clickX = new Array();
//     var clickY = new Array();
//     var clickDrag = new Array();
//     var paint: boolean;

//     function addClick(x, y, dragging)
//     {
//       clickX.push(x);
//       clickY.push(y);
//       clickDrag.push(dragging);
//     }

//     function redraw(){
//       this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height); // Clears the canvas
//       this.context.strokeStyle = "#df4b26";
//       this.context.lineJoin = "round";
//       this.context.lineWidth = 5;
          
//       for(var i=0; i < clickX.length; i++) {		
//         this.context.beginPath();
//         if(clickDrag[i] && i){
//           this.context.moveTo(clickX[i-1], clickY[i-1]);
//          }else{
//            this.context.moveTo(clickX[i]-1, clickY[i]);
//          }
//          this.context.lineTo(clickX[i], clickY[i]);
//          this.context.closePath();
//          this.context.stroke();
//       }
//     }

//     $('#canvasSheet').mousedown((e) =>  {
//       var mouseX = e.pageX - $('#canvasSheet').offsetLeft;
//       var mouseY = e.pageY - $('#canvasSheet').offsetTop;
        
//       paint = true;
//       addClick(e.pageX - $('#canvasSheet').offsetLeft, e.pageY - $('#canvasSheet').offsetTop, false);
//       redraw();
//     });

//     $('#canvasSheet').mousemove((e) => {
//       if(paint){
//         addClick(e.pageX - $('#canvasSheet').offsetLeft, e.pageY - $('#canvasSheet').offsetTop, true);
//         redraw();
//       }
//     });

//     $('#canvasSheet').mouseup(function(e){
//       paint = false;
//     });

//     $('#canvasSheet').mouseleave(function(e){
//       paint = false;
//     });
//   }

// }
