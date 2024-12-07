import { Directive, ElementRef, inject, Renderer2 } from '@angular/core';

@Directive({
  selector: '[sharedNoSelectText]',
})
export class NoSelectTextDirective {
  private readonly _el = inject(ElementRef);
  private readonly _renderer = inject(Renderer2);

  constructor() {
    this._setNoSelectStyles();
  }

  private _setNoSelectStyles(): void {
    const styles = [
      { name: 'user-select', value: 'none' },
      { name: '-webkit-user-select', value: 'none' },
      { name: '-ms-user-select', value: 'none' },
      { name: '-moz-user-select', value: 'none' },
    ];

    styles.forEach((style) => this._renderer.setStyle(this._el.nativeElement, style.name, style.value));
  }
}
