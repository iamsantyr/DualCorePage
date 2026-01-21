import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TeamMember } from '../../models';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {
  teamMembers: TeamMember[] = [
    {
      name: 'Sergio López',
      role: 'Co-Founder & Backend Lead',
      background: 'Backend specialist and deployment expert. Handles project organization, system architecture, and technical infrastructure for AI solutions.',
      expertise: ['Project Organization', 'Backend Development', 'System Deployment', 'Technical Infrastructure']
    },
    {
      name: 'Santiago Rodríguez',
      role: 'Co-Founder & Frontend Lead',
      background: 'Frontend specialist and social media strategist. Expert in user experience, documentation, and frontend-backend integration for intelligent products.',
      expertise: ['Frontend Development', 'Social Media Strategy', 'Documentation', 'Frontend-Backend Connection']
    }
  ];

  getInitials(name: string): string {
    return name.split(' ').map(n => n[0]).join('');
  }
}
