import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationsService {
  dataStreamsCreated = signal(false);

  createDataStreams(): void {
    if (this.dataStreamsCreated()) return;
    
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
    
    this.dataStreamsCreated.set(true);
  }

  smoothScrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }
}
