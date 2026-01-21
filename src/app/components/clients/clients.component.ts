import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Client } from '../../models';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent {
  clients: Client[] = [
    { name: 'TechCorp', industry: 'Technology', logo: 'TC' },
    { name: 'FinanceFlow', industry: 'FinTech', logo: 'FF' },
    { name: 'HealthTech', industry: 'Healthcare', logo: 'HT' },
    { name: 'RetailMax', industry: 'E-commerce', logo: 'RM' },
    { name: 'AutoDrive', industry: 'Automotive', logo: 'AD' },
    { name: 'EduSmart', industry: 'Education', logo: 'ES' },
    { name: 'GreenEnergy', industry: 'Energy', logo: 'GE' },
    { name: 'SecureBank', industry: 'Banking', logo: 'SB' }
  ];
}
