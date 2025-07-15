import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[ngxSearchAriaLabel]',
})
export class SearchAriaLabelDirective implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const nativeElement: HTMLElement = this.el.nativeElement;

    // Add aria-labels to internal buttons
    const buttons = nativeElement.querySelectorAll('button');
    buttons.forEach((btn, i) => {
      if (btn && !btn.hasAttribute('aria-label')) {
        if (btn.classList.contains('start-search')) {
          btn.setAttribute('aria-label', 'Search');
        }
      }
    });
  }
}
