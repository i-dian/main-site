import {Directive, HostListener, Input, OnInit, Renderer2} from '@angular/core';
import {DomController} from "@ionic/angular";

@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective implements OnInit {
  @Input('appParallax')
  logoBox;

  overlay;

  constructor(
    private renderer: Renderer2,
    private domController: DomController
  ) {
  }

  @HostListener('ionScroll', ['$event']) onContentScroll($event) {
    const scrollTop = $event.detail.scrollTop;
    const moveY = scrollTop / 1.8;
    let newScale = 1;

    if (scrollTop > 80) {
      const amount = (scrollTop - 80);
      newScale = 1 - amount / 300;
      if (newScale < 0) {
        newScale = 0;
      }
      // console.log(`newScale: ${newScale}`);

    }
    this.domController.write(() => {
      this.renderer.setStyle(this.logoBox, 'transform', `translateY(${moveY}px)`);
      this.renderer.setStyle(this.logoBox, 'opacity', newScale);
      // this.renderer.setStyle(this.logoBox, 'transform', `translateY(${moveY}px)`);

    })


  }

  ngOnInit(): void {
    this.overlay = this.logoBox.getElementsByClassName('overlay')[0];
  }


}
