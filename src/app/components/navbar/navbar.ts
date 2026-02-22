import { Component, signal, afterNextRender, DestroyRef, inject } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class NavbarComponent {
  private destroyRef = inject(DestroyRef);

  menuOpen = signal(false);
  activeSection = signal('profile');

  navLinks = [
    { id: 'profile', label: 'Perfil' },
    { id: 'experience', label: 'Experiencia' },
    { id: 'skills', label: 'Habilidades' },
    { id: 'contact', label: 'Contacto' },
  ];

  constructor() {
    afterNextRender(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.activeSection.set(entry.target.getAttribute('id')!);
            }
          });
        },
        { rootMargin: '-30% 0px -70% 0px' }
      );

      this.navLinks.forEach((link) => {
        const target = document.getElementById(link.id);
        if (target) {
          observer.observe(target);
        }
      });

      this.destroyRef.onDestroy(() => observer.disconnect());
    });
  }

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
