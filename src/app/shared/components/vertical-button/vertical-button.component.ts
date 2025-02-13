import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  onDivClick(): void {
    this.click.emit();
  }
}
