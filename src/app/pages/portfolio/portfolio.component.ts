import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PortfolioProject } from '../../models';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  selectedCategory = signal('All');

  projects: PortfolioProject[] = [
    {
      title: 'OptiActas - Meeting Minutes Automation',
      company: 'DualCore Intelligence Labs',
      description: 'Revolutionary AI-powered platform that automatically generates meeting minutes, transcribes audio, extracts key decisions, and creates actionable task lists from recorded meetings.',
      technologies: ['Python', 'Speech Recognition', 'NLP', 'AI Agents', 'Document Generation'],
      results: [
        '100% automated meeting documentation',
        'Real-time audio transcription',
        'Intelligent decision extraction',
        'Automatic task assignment and tracking'
      ],
      category: 'Product Development'
    },
    {
      title: 'Distributed Library System',
      company: 'DualCore Intelligence Labs',
      description: 'Comprehensive library management system with AI-powered cataloging, user recommendations, and automated inventory tracking for educational institutions.',
      technologies: ['Python', 'AI/ML', 'Database Management', 'Web Interface', 'Inventory Automation'],
      results: [
        'Automated book cataloging and classification',
        'Smart user recommendation engine',
        'Real-time inventory tracking',
        'Streamlined borrowing and return processes'
      ],
      category: 'Product Development'
    },
    {
      title: 'AI-Powered Business Process Automation',
      company: 'Client Project',
      description: 'Custom automation solution that uses agentic workflows to streamline business processes, reducing manual work and improving efficiency.',
      technologies: ['Python', 'Agentic Workflows', 'Process Automation', 'API Integration'],
      results: [
        'Automated document processing',
        'Streamlined approval workflows',
        'Intelligent task prioritization',
        'Seamless system integration'
      ],
      category: 'Agentic Workflows'
    },
    {
      title: 'Smart Data Analytics Platform',
      company: 'Client Project',
      description: 'Advanced analytics platform that combines traditional data analysis with AI-driven insights and predictive modeling for business intelligence.',
      technologies: ['Python', 'Data Analytics', 'Predictive Modeling', 'Business Intelligence'],
      results: [
        'Automated data visualization',
        'Predictive analytics capabilities',
        'Real-time reporting dashboard',
        'Intelligent pattern recognition'
      ],
      category: 'Machine Learning'
    }
  ];

  categories = ['All', 'Agentic Workflows', 'Machine Learning', 'Product Development', 'Cloud Architecture'];

  get filteredProjects(): PortfolioProject[] {
    if (this.selectedCategory() === 'All') {
      return this.projects;
    }
    return this.projects.filter(project => project.category === this.selectedCategory());
  }

  setCategory(category: string): void {
    this.selectedCategory.set(category);
  }
}
