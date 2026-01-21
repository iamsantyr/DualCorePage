import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TeamMember, SocialLink } from '../../models';

@Component({
  selector: 'app-team-modal',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './team-modal.component.html',
  styleUrl: './team-modal.component.css'
})
export class TeamModalComponent {
  @Input() isOpen = false;
  @Input() selectedMember: TeamMember | null = null;
  @Output() close = new EventEmitter<void>();

  openSocialLink(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  getMemberSocialLinks(name: string): SocialLink[] {
    if (name.includes('Sergio')) {
      return [
        { name: 'GitHub', url: 'https://github.com/sergiolopez', icon: 'github' },
        { name: 'LinkedIn', url: 'https://linkedin.com/in/sergiolopez', icon: 'linkedin' },
        { name: 'Twitter', url: 'https://x.com/sergiolopez', icon: 'twitter' },
        { name: 'Email', url: 'mailto:sergio@dualcore.ai', icon: 'email' }
      ];
    } else {
      return [
        { name: 'GitHub', url: 'https://github.com/santiagorodriguez', icon: 'github' },
        { name: 'LinkedIn', url: 'https://linkedin.com/in/santiagorodriguez', icon: 'linkedin' },
        { name: 'Instagram', url: 'https://instagram.com/santiagorodriguez', icon: 'instagram' },
        { name: 'Email', url: 'mailto:santiago@dualcore.ai', icon: 'email' }
      ];
    }
  }

  getInitials(name: string): string {
    if (!name) return '';
    const parts = name.split(' ');
    if (parts.length === 1) {
      return parts[0].substring(0, 2).toUpperCase();
    }
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }

  getFirstName(name: string): string {
    if (!name) return '';
    return name.split(' ')[0];
  }
}
