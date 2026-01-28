import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { ProofPointsComponent } from '../../components/proof-points/proof-points.component';
import { ExpertiseComponent } from '../../components/expertise/expertise.component';
import { InnovationComponent } from '../../components/innovation/innovation.component';
import { ClientsComponent } from '../../components/clients/clients.component';
import { TeamComponent } from '../../components/team/team.component';
import { ContactPreviewComponent } from '../../components/contact-preview/contact-preview.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroSectionComponent,
    ProofPointsComponent,
    ExpertiseComponent,
    InnovationComponent,
    ClientsComponent,
    TeamComponent,
    ContactPreviewComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {}
