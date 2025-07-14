import {
  AfterViewInit,
  Directive,
  ElementRef,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[ngxCalendarAriaLabel]', // apply only to nb-calendar with this attribute
})
export class CalendarAriaLabelDirective implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    setTimeout(() => {
      const nativeElement = this.el.nativeElement;

      const prevBtn = nativeElement.querySelector('.prev-month');
      const nextBtn = nativeElement.querySelector('.next-month');

      if (prevBtn) {
        this.renderer.setAttribute(prevBtn, 'aria-label', 'Go to previous month');
      }

      if (nextBtn) {
        this.renderer.setAttribute(nextBtn, 'aria-label', 'Go to next month');
      }
    }, 0);
  }
}
