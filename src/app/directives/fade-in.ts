import { Directive, ElementRef, afterNextRender, DestroyRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appFadeIn]',
})
export class FadeInDirective {
  private el = inject(ElementRef);
  private destroyRef = inject(DestroyRef);

  appFadeIn = input<'up' | 'left' | 'right'>('up');

  constructor() {
    afterNextRender(() => {
      const element = this.el.nativeElement as HTMLElement;
      const direction = this.appFadeIn();

      element.style.opacity = '0';
      element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

      if (direction === 'up') {
        element.style.transform = 'translateY(30px)';
      } else if (direction === 'left') {
        element.style.transform = 'translateX(-30px)';
      } else if (direction === 'right') {
        element.style.transform = 'translateX(30px)';
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              element.style.opacity = '1';
              element.style.transform = 'translate(0)';
              observer.unobserve(element);
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(element);
      this.destroyRef.onDestroy(() => observer.disconnect());
    });
  }
}
