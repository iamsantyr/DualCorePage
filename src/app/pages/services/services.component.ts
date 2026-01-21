import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Service } from '../../models';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  services: Service[] = [
    {
      title: 'Agentic Workflows',
      description: 'Design and implementation of intelligent agents that orchestrate complex tasks and adapt to business needs.',
      features: [
        'Autonomous agent design',
        'Workflow orchestration',
        'Existing system integration',
        'Dynamic adaptation to changes'
      ],
      icon: '🤖'
    },
    {
      title: 'Advanced Machine Learning',
      description: 'Custom ML models that automate decisions and optimize business processes from start to finish.',
      features: [
        'Custom predictive models',
        'Decision automation',
        'Process optimization',
        'Scalable data pipelines'
      ],
      icon: '🧠'
    },
    {
      title: 'Intelligent Products',
      description: 'AI-powered product development that enhances user experience and operational efficiency.',
      features: [
        'AI product integration',
        'Smart interfaces',
        'Automated personalization',
        'Predictive user analytics'
      ],
      icon: '🎯'
    },
    {
      title: 'Cloud Architectures',
      description: 'Design and implementation of cloud-native architectures for scalable and secure AI solutions.',
      features: [
        'Cloud architecture design',
        'Auto-scaling',
        'Security and compliance',
        'ML DevOps'
      ],
      icon: '☁️'
    },
    {
      title: 'Strategy & Discovery',
      description: 'We accompany from initial strategy to discovery of specific AI use cases.',
      features: [
        'Readiness assessment',
        'Use case discovery',
        'Strategic roadmap',
        'Impact analysis'
      ],
      icon: '🔍'
    },
    {
      title: 'Full Lifecycle Management',
      description: 'Comprehensive management of data and AI product lifecycle, from design to impact measurement.',
      features: [
        'Implementation and deployment',
        'Continuous monitoring',
        'Impact measurement',
        'Global 24/7 support'
      ],
      icon: '🔄'
    }
  ];
}
