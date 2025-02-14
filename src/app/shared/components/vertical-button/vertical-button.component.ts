import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'vertical-button',
  imports: [MatButtonModule, MatIconModule, MatRippleModule],
  templateUrl: './vertical-button.component.html',
  styleUrl: './vertical-button.component.scss',
})
export class VerticalButtonComponent {
  @Input({ required: true }) icon!: string;
  @Input({ required: true }) label!: string;

  @Output() click = new EventEmitter<void>();

  onClick(): void {
    this.click.emit();
  }
}
