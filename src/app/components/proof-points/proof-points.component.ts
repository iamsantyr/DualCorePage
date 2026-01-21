import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProofPoint } from '../../models';

@Component({
  selector: 'app-proof-points',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proof-points.component.html',
  styleUrl: './proof-points.component.css'
})
export class ProofPointsComponent {
  proofPoints: ProofPoint[] = [
    {
      icon: '🚀',
      title: 'Proven Track Record',
      description: 'Successfully delivered 50+ AI projects across various industries with measurable business impact.'
    },
    {
      icon: '⚡',
      title: 'Rapid Deployment',
      description: 'From concept to deployment in weeks, not months. Our agile approach ensures fast time-to-market.'
    },
    {
      icon: '🛡️',
      title: 'Enterprise Security',
      description: 'Bank-level security protocols and compliance with industry standards to protect your data.'
    },
    {
      icon: '📈',
      title: 'Scalable Solutions',
      description: 'AI systems that grow with your business, handling increasing workloads efficiently.'
    },
    {
      icon: '🤝',
      title: 'Expert Team',
      description: 'PhD-level researchers and industry veterans with deep expertise in AI/ML technologies.'
    },
    {
      icon: '🔄',
      title: '24/7 Support',
      description: 'Round-the-clock monitoring and support to ensure your AI systems run optimally.'
    }
  ];
}
