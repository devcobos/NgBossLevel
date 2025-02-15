import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocationInterface } from '@core/interfaces/rickdex/rickdex.interfaces';
import { RickDexCardLocationComponent } from '@features/rickdex/cards/card-location/card-location.component';

@Component({
  selector: 'rickdex-detail-location',
  templateUrl: './detail-location.component.html',
  styleUrls: ['./detail-location.component.scss'],
  imports: [RickDexCardLocationComponent],
})
export class DetailLocationComponent {
  private _activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private _ref: ChangeDetectorRef = inject(ChangeDetectorRef);

  location!: LocationInterface;

  ngOnInit(): void {
    this._activatedRoute.data.subscribe(({ location }) => {
      this.location = location;
    });
    this._ref.detectChanges();
  }
}
