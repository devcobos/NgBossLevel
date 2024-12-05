import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, inject, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { SidenavNavigationComponent } from '@core/layout/sidenav/sidenav-navigation/sidenav-navigation.component';

@Component({
  selector: 'layout-sidenav',
  imports: [MatSidenavContainer, MatSidenavContent, MatSidenav, SidenavNavigationComponent],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent {
  @ViewChild('snav') snav!: MatSidenav;
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  private readonly _changeDetectorRef = inject(ChangeDetectorRef);
  private readonly _media = inject(MediaMatcher);

  constructor() {
    this.mobileQuery = this._media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => this._changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }

  toggleSidenav() {
    this.snav.toggle();
  }
}
