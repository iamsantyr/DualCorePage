import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { FormData, FormStatus } from '../../models';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  @Input() formData!: FormData;
  @Input() formStatus!: FormStatus;
  @Input() contactForm!: FormGroup;
  @Output() onInputChange = new EventEmitter<{ field: string; value: string }>();
  @Output() onSubmit = new EventEmitter<void>();

  projectTypes = [
    'AI Strategy Consultation',
    'Machine Learning Development',
    'Natural Language Processing',
    'Computer Vision',
    'AI Integration',
    'Custom Solution',
    'Other'
  ];

  handleInputChange(field: string, value: string): void {
    this.onInputChange.emit({ field, value });
  }

  handleSubmit(): void {
    this.onSubmit.emit();
  }
}
