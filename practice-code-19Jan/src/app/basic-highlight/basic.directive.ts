import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2, input } from '@angular/core';

@Directive({
  selector: '[appBasic]'
})
export class BasicDirective implements OnInit{
  @Input() defaultColor:string=' ';

  @HostBinding('style.backgroundColor') backgroundColor:string=this.defaultColor;
  constructor(private eleRef:ElementRef, private renderer:Renderer2) { }


  ngOnInit(): void {
    //this.renderer.setStyle(this.eleRef.nativeElement,'background-color','blue')   
  }
  

  //if we use host listener then we use the code in HostListener
  @HostListener('mouseenter') mouseover(eventData: Event){
    //when using normal hostlistener
   // this.renderer.setStyle(this.eleRef.nativeElement,'background-color','blue')
   
   //when host binding is used
   this.backgroundColor='red'
  }
  @HostListener('mouseleave') mouseleave(eventData: Event){
    //when using normal hostlistener
    //this.renderer.setStyle(this.eleRef.nativeElement,'background-color','pink')

    //when host binding is used
    this.backgroundColor=this.defaultColor;

  }
}
