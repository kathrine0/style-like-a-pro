import { Component } from '@angular/core';
import { WinnieFormComponent } from '../winnie-form/winnie-form.component';

@Component({
  selector: 'app-override-api-styles',
  imports: [],
  template: `
    <ng-content></ng-content>
  `,
  styleUrl: './override-api.component.scss',
})
export class OverrideApiComponent { }
