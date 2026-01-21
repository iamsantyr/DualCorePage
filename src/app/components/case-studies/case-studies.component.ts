import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CaseStudy } from '../../models';

@Component({
  selector: 'app-case-studies',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './case-studies.component.html',
  styleUrl: './case-studies.component.css'
})
export class CaseStudiesComponent {
  caseStudies: CaseStudy[] = [
    {
      company: 'TechCorp',
      title: 'AI-Powered Customer Service',
      description: 'Implemented an intelligent chatbot system that reduced response times by 80% and improved customer satisfaction.',
      metrics: [
        { label: 'Response Time', value: '80% reduction' },
        { label: 'Customer Satisfaction', value: '95% positive' }
      ],
      results: [
        'Automated 10,000+ customer inquiries monthly',
        'Reduced operational costs by $500K annually',
        '24/7 availability with 99.9% uptime'
      ],
      technologies: ['GPT-4', 'Azure OpenAI', 'React', 'Node.js']
    },
    {
      company: 'FinanceFlow',
      title: 'Automated Fraud Detection',
      description: 'Built a machine learning system that detects fraudulent transactions in real-time with 99.7% accuracy.',
      metrics: [
        { label: 'Detection Accuracy', value: '99.7%' },
        { label: 'False Positives', value: '0.3% reduction' }
      ],
      results: [
        'Prevented $2M in fraudulent transactions',
        'Real-time processing of 1M+ transactions daily',
        'Improved regulatory compliance'
      ],
      technologies: ['Python', 'TensorFlow', 'AWS', 'PostgreSQL']
    },
    {
      company: 'HealthTech Solutions',
      title: 'Medical Image Analysis',
      description: 'Developed AI system for automated medical image analysis, assisting radiologists in faster diagnosis.',
      metrics: [
        { label: 'Diagnosis Speed', value: '70% faster' },
        { label: 'Accuracy Rate', value: '96.8%' }
      ],
      results: [
        'Analyzed 50,000+ medical images',
        'Reduced diagnosis time from 30 to 9 minutes',
        'Improved early detection rates by 40%'
      ],
      technologies: ['PyTorch', 'OpenCV', 'FastAPI', 'Docker']
    }
  ];
}
