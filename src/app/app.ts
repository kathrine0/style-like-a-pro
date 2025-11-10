import { Component, signal } from '@angular/core';
import { WinnieFormComponent } from './winnie-form/winnie-form.component';

@Component({
  selector: 'app-root',
  imports: [WinnieFormComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('style-like-a-pro');
}
