import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from '../../components/team/team.component';
import { ExpertiseComponent } from '../../components/expertise/expertise.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, TeamComponent, ExpertiseComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {}
