import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TeamMember } from '../../models';
import { TeamModalComponent } from '../team-modal/team-modal.component';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule, RouterLink, TeamModalComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {
  hoveredMember = signal<number | null>(null);
  selectedMember = signal<TeamMember | null>(null);
  isModalOpen = signal(false);
  
  teamMembers: TeamMember[] = [
    {
      name: 'Sergio López',
      role: 'Co-Founder & Backend Lead',
      background: 'Backend specialist and deployment expert. Handles project organization, system architecture, and technical infrastructure for AI solutions. Passionate about building scalable systems that power intelligent workflows.',
      expertise: ['Project Organization', 'Backend Development', 'System Deployment', 'Technical Infrastructure', 'Cloud Architecture', 'DevOps']
    },
    {
      name: 'Santiago Rodríguez',
      role: 'Co-Founder & Frontend Lead',
      background: 'Frontend specialist and social media strategist. Expert in user experience, documentation, and frontend-backend integration for intelligent products. Dedicated to creating seamless user experiences.',
      expertise: ['Frontend Development', 'Social Media Strategy', 'Documentation', 'Frontend-Backend Connection', 'UX Design', 'Product Strategy']
    }
  ];

  getInitials(name: string): string {
    return name.split(' ').map(n => n[0]).join('');
  }

  setHovered(index: number | null): void {
    this.hoveredMember.set(index);
  }

  openMemberModal(member: TeamMember): void {
    this.selectedMember.set(member);
    this.isModalOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  closeMemberModal(): void {
    this.isModalOpen.set(false);
    setTimeout(() => {
      this.selectedMember.set(null);
    }, 300);
    document.body.style.overflow = '';
  }
}
