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
      technologies: ['Python', 'Speech Recognition', 'NLP', 'AI Agents', 'Document Generation', 'OptiActas'],
      results: [
        '100% automated meeting documentation',
        'Real-time audio transcription',
        'Intelligent decision extraction',
        'Automatic task assignment and tracking'
      ],
      category: 'Product Development',
      featured: true
    },
    {
      title: 'OptiActas - Cloud Infrastructure',
      company: 'DualCore Intelligence Labs',
      description: 'Scalable and secure cloud architecture for the OptiActas platform, ensuring high availability, automatic scaling, and enterprise-grade security for AI-powered meeting automation.',
      technologies: ['AWS', 'Kubernetes', 'Serverless', 'Cloud Architecture', 'OptiActas'],
      results: [
        '99.9% uptime guarantee',
        'Auto-scaling infrastructure',
        'Enterprise security compliance',
        'Global CDN distribution'
      ],
      category: 'Cloud Architecture',
      featured: false
    },
    {
      title: 'OptiActas - API & Integration Services',
      company: 'DualCore Intelligence Labs',
      description: 'Robust API layer and third-party integrations for OptiActas, enabling seamless connectivity with popular productivity tools and enterprise systems.',
      technologies: ['REST API', 'Webhooks', 'OAuth 2.0', 'Integration Services', 'OptiActas'],
      results: [
        'Seamless calendar integration',
        'Slack & Teams connectivity',
        'CRM system integration',
        'Custom API endpoints'
      ],
      category: 'Agentic Workflows',
      featured: false
    },
    {
      title: 'OptiActas - Machine Learning Pipeline',
      company: 'DualCore Intelligence Labs',
      description: 'Advanced ML pipeline for OptiActas, continuously improving speech recognition accuracy, decision extraction algorithms, and natural language understanding.',
      technologies: ['TensorFlow', 'PyTorch', 'MLOps', 'Model Training', 'OptiActas'],
      results: [
        '95% transcription accuracy',
        'Adaptive learning algorithms',
        'Real-time inference engine',
        'Continuous model improvement'
      ],
      category: 'Machine Learning',
      featured: false
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
      category: 'Product Development',
      featured: false
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
      category: 'Agentic Workflows',
      featured: false
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
      category: 'Machine Learning',
      featured: false
    }
  ];

  categories = ['All', 'Agentic Workflows', 'Machine Learning', 'Product Development', 'Cloud Architecture'];

  get featuredProjects(): PortfolioProject[] {
    return this.projects.filter(p => p.featured);
  }

  get filteredProjects(): PortfolioProject[] {
    if (this.selectedCategory() === 'All') {
      return this.projects.filter(p => !p.featured);
    }
    return this.projects.filter(project => project.category === this.selectedCategory() && !project.featured);
  }

  setCategory(category: string): void {
    this.selectedCategory.set(category);
  }
}
