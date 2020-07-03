import { Component ,AfterContentInit, ViewChild, ElementRef } from '@angular/core';
import { NgwWowService} from 'ngx-wow';


declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterContentInit{

  constructor(private wowService: NgwWowService) {
    this.wowService.init();
  }

  
  title = 'app1';

  @ViewChild('carousel') el:ElementRef;

  ngAfterContentInit(): void {

  

    
    console.log(this.el);
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:5
          }
      }
  })

  
   
  }

   ngOnInit () 
  {
  
  this.wowService.init();
  }

  reset() {
    this.wowService.init();
  }

 
}



