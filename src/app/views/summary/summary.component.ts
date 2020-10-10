import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Get Started', cols: 1, rows: 1 },
          { title: 'Latest Match', cols: 1, rows: 1 },
          { title: 'Top Players', cols: 1, rows: 1 },
          { title: 'Latest Tournament', cols: 1, rows: 1 },
        ];
      }

      return [
        { title: 'Get Started', cols: 2, rows: 1 },
        { title: 'Latest Match', cols: 1, rows: 1 },
        { title: 'Top Players', cols: 1, rows: 2 },
        { title: 'Latest Tournament', cols: 1, rows: 1 },
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
