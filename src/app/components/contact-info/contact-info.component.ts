import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactMethod, SocialLink } from '../../models';

@Component({
  selector: 'app-contact-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-info.component.html',
  styleUrl: './contact-info.component.css'
})
export class ContactInfoComponent {
  contactMethods: ContactMethod[] = [
    {
      icon: '',
      title: 'Email',
      value: 'dualcore.oficial@gmail.com',
      description: 'Write to us anytime'
    },
    {
      icon: '',
      title: 'Remote Operations',
      value: '100% Remote - Bogotá, Colombia',
      description: 'Available for clients worldwide'
    },
    {
      icon: '',
      title: 'Response Time',
      value: 'Within 24 hours',
      description: 'Fast communication for all our clients'
    },
    {
      icon: '',
      title: 'Location',
      value: 'Bogotá, Colombia',
      description: 'Serving global clients from Colombia'
    }
  ];

  socialLinks: SocialLink[] = [
    { name: 'X (Twitter)', url: 'https://x.com/DualCoreOff', icon: '' },
    { name: 'Instagram', url: 'https://www.instagram.com/dualcoreoff/', icon: '' },
    { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61585368651527', icon: '' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/dualcore-official/about/', icon: '' }
  ];
}
