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
        { name: 'GitHub', url: 'https://github.com/SergioLopezAyala', icon: 'github' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/sergio-lopez-b52495295/', icon: 'linkedin' }
      ];
    } else {
      return [
        { name: 'GitHub', url: 'https://github.com/iamsantyr', icon: 'github' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/santiago-rodriguez-prieto-9019a5350/', icon: 'linkedin' },
        { name: 'Email', url: 'mailto:iamsantyr@gmail.com', icon: 'email' }
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
