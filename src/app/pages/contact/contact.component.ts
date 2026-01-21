import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { ContactInfoComponent } from '../../components/contact-info/contact-info.component';
import { validateForm } from '../../utils/validators';
import { FormData, FormStatus } from '../../models';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ContactFormComponent,
    ContactInfoComponent
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  private emailService = inject(EmailService);

  formData = signal<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    projectType: '',
    estimatedBudget: '',
  });

  formStatus = signal<FormStatus>({
    loading: false,
    success: false,
    error: null,
  });

  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      company: [''],
      subject: [''],
      message: ['', [Validators.required, Validators.minLength(10)]],
      projectType: [''],
      estimatedBudget: [''],
    });
  }

  handleInputChange(field: string, value: string): void {
    this.formData.update(data => ({
      ...data,
      [field]: value
    }));
  }

  async handleSubmit(): Promise<void> {
    const formValue = this.contactForm.value;
    
    const validation = validateForm({
      name: formValue.name,
      email: formValue.email,
      message: formValue.message,
    });

    if (!validation.isValid) {
      this.formStatus.set({
        loading: false,
        success: false,
        error: Object.values(validation.errors)[0],
      });
      return;
    }

    this.formStatus.set({ loading: true, success: false, error: null });

    try {
      const result = await this.emailService.sendEmail({
        from_name: formValue.name,
        from_email: formValue.email,
        phone: formValue.phone,
        company: formValue.company,
        subject: formValue.subject,
        message: formValue.message,
        project_type: formValue.projectType,
        estimated_budget: formValue.estimatedBudget,
      });

      if (result.success) {
        this.formStatus.set({
          loading: false,
          success: true,
          error: null,
        });

        setTimeout(() => {
          this.contactForm.reset();
          this.formData.set({
            name: '',
            email: '',
            phone: '',
            company: '',
            subject: '',
            message: '',
            projectType: '',
            estimatedBudget: '',
          });
          this.formStatus.set({ loading: false, success: false, error: null });
        }, 3000);
      } else {
        this.formStatus.set({
          loading: false,
          success: false,
          error: result.error || 'Error al enviar el mensaje. Por favor intenta nuevamente.',
        });
      }
    } catch (error) {
      this.formStatus.set({
        loading: false,
        success: false,
        error: 'Error al enviar el mensaje. Por favor intenta nuevamente.',
      });
    }
  }
}
