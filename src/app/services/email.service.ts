import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { EmailTemplateParams } from '../models';

declare const emailjs: any;

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private isInitialized = false;

  constructor() {
    this.initializeEmailJS();
  }

  private initializeEmailJS(): void {
    if (typeof emailjs !== 'undefined') {
      emailjs.init(environment.emailjs.publicKey);
      this.isInitialized = true;
    }
  }

  async sendEmail(templateParams: EmailTemplateParams): Promise<{ success: boolean; error?: string }> {
    if (!this.isInitialized) {
      this.initializeEmailJS();
    }

    if (typeof emailjs === 'undefined') {
      return {
        success: false,
        error: 'EmailJS is not loaded. Please check your internet connection.'
      };
    }

    try {
      await emailjs.send(
        environment.emailjs.serviceId,
        environment.emailjs.templateId,
        {
          from_name: templateParams.from_name,
          from_email: templateParams.from_email,
          phone: templateParams.phone || 'Not provided',
          company: templateParams.company || 'Not provided',
          subject: templateParams.subject || 'General inquiry',
          message: templateParams.message,
          project_type: templateParams.project_type || 'Not specified',
          estimated_budget: templateParams.estimated_budget || 'Not specified',
          reply_to: templateParams.from_email
        }
      );

      return { success: true };
    } catch (error: unknown) {
      console.error('Error sending email:', error);
      const errorMessage = error instanceof Error ? error.message : 'Error sending message';
      return {
        success: false,
        error: errorMessage
      };
    }
  }
}