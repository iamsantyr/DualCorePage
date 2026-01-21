import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpertiseArea } from '../../models';

@Component({
  selector: 'app-expertise',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './expertise.component.html',
  styleUrl: './expertise.component.css'
})
export class ExpertiseComponent {
  expertiseAreas: ExpertiseArea[] = [
    {
      title: 'Agentic Workflows',
      level: 90,
      description: 'Design and implementation of intelligent agents that orchestrate complex tasks and adapt dynamically',
      skills: ['LangChain', 'LangGraph', 'Multi-Agent Systems', 'Workflow Orchestration']
    },
    {
      title: 'Modern Machine Learning',
      level: 92,
      description: 'Advanced ML for decision automation and business process optimization',
      skills: ['Deep Learning', 'Transfer Learning', 'Federated Learning', 'MLOps']
    },
    {
      title: 'Cloud-Native AI',
      level: 88,
      description: 'Scalable cloud architectures for AI solutions with auto-scaling and high availability',
      skills: ['AWS Lambda', 'Kubernetes', 'Serverless ML', 'Auto-scaling']
    },
    {
      title: 'Product Intelligence',
      level: 85,
      description: 'AI integration in products to create intelligent and personalized experiences',
      skills: ['Feature Engineering', 'Recommendation Systems', 'A/B Testing', 'User Analytics']
    },
    {
      title: 'ML CI/CD',
      level: 87,
      description: 'Automated pipelines for development, testing and continuous deployment of ML models',
      skills: ['MLflow', 'Apache Airflow', 'DVC', 'Continuous Integration']
    },
    {
      title: 'Responsible AI',
      level: 89,
      description: 'Ethical AI development with focus on security, privacy and transparency',
      skills: ['AI Governance', 'Bias Mitigation', 'Privacy-Preserving AI', 'Explainable AI']
    }
  ];
}
