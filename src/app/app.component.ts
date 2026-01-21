import { Component, OnInit, OnDestroy, signal, afterNextRender, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    NavigationComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('customCursor', { static: true }) cursorElement!: ElementRef<HTMLDivElement>;
  
  cursorHovering = signal(false);
  
  private mouseMoveHandler: ((e: MouseEvent) => void) | null = null;
  private leaveWindowHandler: (() => void) | null = null;
  private animationFrameId: number | null = null;
  
  // Store target position for smooth interpolation
  private targetX = 0;
  private targetY = 0;
  private currentX = 0;
  private currentY = 0;

  constructor(private router: Router) {
    afterNextRender(() => {
      this.initCustomCursor();
    });
  }

  ngOnInit(): void {
    this.initDataStreams();
  }

  ngOnDestroy(): void {
    this.cleanupEventListeners();
  }

  private initCustomCursor(): void {
    const cursor = this.cursorElement.nativeElement;
    if (!cursor) return;

    // Initialize cursor position to center of screen
    this.currentX = window.innerWidth / 2;
    this.currentY = window.innerHeight / 2;
    this.targetX = this.currentX;
    this.targetY = this.currentY;

    this.mouseMoveHandler = (e: MouseEvent) => {
      this.targetX = e.clientX;
      this.targetY = e.clientY;
    };

    this.leaveWindowHandler = () => {
      cursor.style.opacity = '0';
    };

    document.addEventListener('mousemove', this.mouseMoveHandler);
    document.addEventListener('mouseenter', () => {
      cursor.style.opacity = '1';
    });
    document.addEventListener('mouseleave', this.leaveWindowHandler);

    // Start smooth animation loop
    this.animateCursor();

    // Add hover effects to interactive elements
    this.addHoverEffects();
  }

  private animateCursor(): void {
    const cursor = this.cursorElement.nativeElement;
    if (!cursor) return;

    // Smooth interpolation (easing)
    const ease = 0.15;
    this.currentX += (this.targetX - this.currentX) * ease;
    this.currentY += (this.targetY - this.currentY) * ease;

    // Update cursor position directly using transform for better performance
    cursor.style.transform = `translate3d(${this.currentX - 10}px, ${this.currentY - 10}px, 0)`;

    // Continue animation loop
    this.animationFrameId = requestAnimationFrame(() => this.animateCursor());
  }

  private addHoverEffects(): void {
    const interactiveElements = document.querySelectorAll('a, button, .nav-link, .btn, .social-link, .footer-link, .portfolio-link');
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', () => {
        this.cursorHovering.set(true);
      });
      element.addEventListener('mouseleave', () => {
        this.cursorHovering.set(false);
      });
    });
    
    // Also observe for new elements added to DOM
    const observer = new MutationObserver(() => {
      const newElements = document.querySelectorAll('a:not([data-cursor-watched]), button:not([data-cursor-watched])');
      newElements.forEach(el => {
        el.setAttribute('data-cursor-watched', 'true');
        el.addEventListener('mouseenter', () => this.cursorHovering.set(true));
        el.addEventListener('mouseleave', () => this.cursorHovering.set(false));
      });
    });
    
    observer.observe(document.body, { childList: true, subtree: true });
  }

  private initDataStreams(): void {
    const streamsContainer = document.getElementById('dataStreams');
    if (!streamsContainer) return;

    // Clear existing streams
    streamsContainer.innerHTML = '';

    for (let i = 0; i < 6; i++) {
      const stream = document.createElement('div');
      stream.className = 'data-stream';
      stream.style.top = Math.random() * 100 + '%';
      stream.style.height = '1px';
      stream.style.width = (50 + Math.random() * 100) + 'px';
      stream.style.animationDelay = Math.random() * 3 + 's';
      stream.style.animationDuration = (2 + Math.random() * 2) + 's';
      streamsContainer.appendChild(stream);
    }
  }

  private cleanupEventListeners(): void {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    if (this.mouseMoveHandler) {
      document.removeEventListener('mousemove', this.mouseMoveHandler);
    }
    if (this.leaveWindowHandler) {
      document.removeEventListener('mouseleave', this.leaveWindowHandler);
    }
  }
}
