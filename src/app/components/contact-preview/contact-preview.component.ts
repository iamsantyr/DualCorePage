import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-preview',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './contact-preview.component.html',
  styleUrl: './contact-preview.component.css'
})
export class ContactPreviewComponent {}
