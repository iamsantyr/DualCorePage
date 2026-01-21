import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Methodology } from '../../models';

@Component({
  selector: 'app-innovation',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './innovation.component.html',
  styleUrl: './innovation.component.css'
})
export class InnovationComponent {
  methodologies: Methodology[] = [
    {
      title: 'Research-Driven Development',
      description: 'We stay at the forefront of AI research, incorporating the latest breakthroughs into practical solutions for your business.'
    },
    {
      title: 'Iterative Innovation',
      description: 'Our agile approach allows for rapid prototyping and continuous improvement, ensuring your AI solution evolves with your needs.'
    },
    {
      title: 'Ethical AI First',
      description: 'Every solution we build prioritizes fairness, transparency, and ethical considerations to create responsible AI systems.'
    }
  ];
}
