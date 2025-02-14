import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { VerticalButtonComponent } from '@shared/components/vertical-button/vertical-button.component';

@Component({
  selector: 'shared-toggle-button',
  imports: [MatButtonModule, MatIconModule, VerticalButtonComponent],
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss'],
})
export class ToggleButtonComponent {
  @Input({ required: true }) primaryIcon!: string;
  @Input({ required: true }) secondaryIcon!: string;
  @Input() label: string = 'Toggle button';
  @Input() isPrimary: boolean = true;

  @Output() toggle = new EventEmitter<boolean>();

  onToggle(): void {
    this.isPrimary = !this.isPrimary;
    this.toggle.emit(this.isPrimary);
  }
}
