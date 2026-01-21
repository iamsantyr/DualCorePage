import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FooterSection, SocialLink } from '../../models';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  footerSections: FooterSection[] = [
    {
      title: 'Services',
      links: [
        { label: 'AI Strategy', path: '/services' },
        { label: 'Machine Learning', path: '/services' },
        { label: 'NLP Solutions', path: '/services' },
        { label: 'Computer Vision', path: '/services' },
        { label: 'AI Integration', path: '/services' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', path: '/about' },
        { label: 'Our Team', path: '/about' },
        { label: 'Careers', path: '/contact' },
        { label: 'Blog', path: '/contact' },
        { label: 'Press', path: '/contact' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Case Studies', path: '/portfolio' },
        { label: 'White Papers', path: '/contact' },
        { label: 'Documentation', path: '/contact' },
        { label: 'Support', path: '/contact' },
        { label: 'API Reference', path: '/contact' }
      ]
    }
  ];

  socialLinks: SocialLink[] = [
    { name: 'X (Twitter)', url: 'https://x.com/DualCoreOff', icon: '𝕏' },
    { name: 'Instagram', url: 'https://www.instagram.com/dualcoreoff/', icon: '📷' },
    { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61585368651527', icon: '📘' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/dualcore-official/about/', icon: '💼' }
  ];
}
