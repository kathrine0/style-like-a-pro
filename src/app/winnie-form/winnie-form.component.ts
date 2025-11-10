import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

type EnergyLevel = 'low' | 'medium' | 'high' | 'maximum';

interface WinnieFormModel {
  hunnyPotCount: FormControl<number | null>;
  tiggerBounce: FormControl<EnergyLevel | null>;
  eeyoreMood: FormControl<boolean>;
  kangaPouch: FormControl<number>;
  importantThought: FormControl<Date | null>;
}

interface WinnieFormValue {
  hunnyPotCount: number | null;
  tiggerBounce: EnergyLevel | null;
  eeyoreMood: boolean;
  kangaPouch: number;
  importantThought: Date | null;
}

@Component({
  selector: 'app-winnie-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSliderModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
  ],
  templateUrl: './winnie-form.component.html',
  styleUrl: './winnie-form.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WinnieFormComponent {
  readonly winnieForm = new FormGroup<WinnieFormModel>({
    hunnyPotCount: new FormControl<number | null>(null, {
      validators: [Validators.required, Validators.min(0)],
      nonNullable: false
    }),
    tiggerBounce: new FormControl<EnergyLevel | null>(null, {
      validators: [Validators.required],
      nonNullable: false
    }),
    eeyoreMood: new FormControl<boolean>(false, {
      nonNullable: true
    }),
    kangaPouch: new FormControl<number>(50, {
      nonNullable: true
    }),
    importantThought: new FormControl<Date | null>(null, {
      validators: [Validators.required],
      nonNullable: false
    })
  });

  readonly energyLevels: ReadonlyArray<{ value: EnergyLevel; label: string }> = [
    { value: 'low', label: 'Low Energy' },
    { value: 'medium', label: 'Medium Energy' },
    { value: 'high', label: 'High Energy' },
    { value: 'maximum', label: 'Maximum Bounce!' }
  ] as const;

  onSubmit(): void {
    if (this.winnieForm.valid) {
      const formValue: WinnieFormValue = this.winnieForm.getRawValue();
      console.log('Form submitted:', formValue);
    }
  }
}
