import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.css']
})


export class SheetComponent implements OnInit {
  title = "Draw/describe this thing!"

@ViewChild('canvasSheet')canvasSheet: ElementRef;

public context: CanvasRenderingContext2D;

  constructor() { }

  
  ngOnInit(): void {
    this.context = (this.canvasSheet.nativeElement as HTMLCanvasElement).getContext('2d');
    var clickX = new Array();
    var clickY = new Array();
    var clickDrag = new Array();
    var paint: boolean;

    function addClick(x, y, dragging)
    {
      clickX.push(x);
      clickY.push(y);
      clickDrag.push(dragging);
    }

    function redraw(){
      this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height); // Clears the canvas
      this.context.strokeStyle = "#df4b26";
      this.context.lineJoin = "round";
      this.context.lineWidth = 5;
          
      for(var i=0; i < clickX.length; i++) {		
        this.context.beginPath();
        if(clickDrag[i] && i){
          this.context.moveTo(clickX[i-1], clickY[i-1]);
         }else{
           this.context.moveTo(clickX[i]-1, clickY[i]);
         }
         this.context.lineTo(clickX[i], clickY[i]);
         this.context.closePath();
         this.context.stroke();
      }
    }

    $('#canvasSheet').mousedown((e) =>  {
      var mouseX = e.pageX - $('#canvasSheet').offsetLeft;
      var mouseY = e.pageY - $('#canvasSheet').offsetTop;
        
      paint = true;
      addClick(e.pageX - $('#canvasSheet').offsetLeft, e.pageY - $('#canvasSheet').offsetTop, false);
      redraw();
    });

    $('#canvasSheet').mousemove((e) => {
      if(paint){
        addClick(e.pageX - $('#canvasSheet').offsetLeft, e.pageY - $('#canvasSheet').offsetTop, true);
        redraw();
      }
    });

    $('#canvasSheet').mouseup(function(e){
      paint = false;
    });

    $('#canvasSheet').mouseleave(function(e){
      paint = false;
    });
  }

}
