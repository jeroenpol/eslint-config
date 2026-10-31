import { Component } from '@angular/core';

import { InlineComponent } from './inline.component';

@Component({
  imports: [InlineComponent, AppComponent],
  selector: 'app-unsorted',
  templateUrl: './app.component.html',
})
export class AppComponent {}
