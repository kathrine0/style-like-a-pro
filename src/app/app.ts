import { Component, signal, effect } from '@angular/core';
import { WinnieFormComponent } from './winnie-form/winnie-form.component';
import { OverrideApiComponent } from './variants/override-api.component';

@Component({
  selector: 'app-root',
  imports: [OverrideApiComponent, WinnieFormComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('style-like-a-pro');
  protected readonly isDarkMode = signal(false);

  constructor() {
    // Apply theme changes when isDarkMode signal changes
    effect(() => {
      const darkMode = this.isDarkMode();
      document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light');
      document.body.style.colorScheme = darkMode ? 'dark' : 'light';
    });
  }

  protected toggleTheme(): void {
    this.isDarkMode.update(current => !current);
  }
}
