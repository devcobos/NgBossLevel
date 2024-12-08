import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NoSelectTextDirective } from '@shared/directives/no-select-text.directive';

@Component({
  selector: 'vertical-button',
  imports: [MatButtonModule, MatIconModule, NoSelectTextDirective],
  templateUrl: './vertical-button.component.html',
  styleUrl: './vertical-button.component.scss',
})
export class VerticalButtonComponent {
  @Input({ required: true }) icon!: string;
  @Input({ required: true }) label!: string;

  @Output() click = new EventEmitter<void>();

  @ViewChild('iconButton') iconButton!: ElementRef<HTMLButtonElement>;

  onDivClick(): void {
    this.click.emit();
  }

  // Manejar el enfoque en el contenedor
  @HostListener('focus', ['$event.target'])
  onDivFocus(): void {
    if (this.iconButton?.nativeElement) {
      this.iconButton.nativeElement.focus(); // Forzar el foco al botón
    }
  }

  // Manejar el desenfoque del contenedor
  onDivBlur(): void {
    this.iconButton.nativeElement.blur();
  }
}
