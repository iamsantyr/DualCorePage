import { Component, signal, HostListener, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavItem } from '../../models';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent implements OnInit, OnDestroy {
  isMenuOpen = signal(false);
  isScrolled = signal(false);
  
  navItems: NavItem[] = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  private scrollHandler: (() => void) | null = null;

  ngOnInit(): void {
    this.initScrollHandler();
  }

  ngOnDestroy(): void {
    this.cleanupScrollHandler();
  }

  private initScrollHandler(): void {
    this.scrollHandler = () => {
      this.isScrolled.set(window.scrollY > 50);
    };
    window.addEventListener('scroll', this.scrollHandler);
    // Initial check
    this.isScrolled.set(window.scrollY > 50);
  }

  private cleanupScrollHandler(): void {
    if (this.scrollHandler) {
      window.removeEventListener('scroll', this.scrollHandler);
    }
  }

  toggleMenu(): void {
    this.isMenuOpen.update(value => !value);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  isActive(path: string): boolean {
    if (path === '/') {
      return window.location.pathname === '/';
    }
    return window.location.pathname.startsWith(path);
  }
}
