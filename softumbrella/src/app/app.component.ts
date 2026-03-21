import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, OnDestroy, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'softumbrella';

  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private scrollCleanup?: () => void;

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const win = this.document.defaultView;
    if (!win) {
      return;
    }
    const body = this.document.body;
    let hasScrolledClass = false;
    const onScroll = () => {
      const scrolled = win.scrollY > 0;
      if (scrolled === hasScrolledClass) {
        return;
      }
      hasScrolledClass = scrolled;
      body.classList.toggle('scrolled-from-top', scrolled);
    };
    win.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    this.scrollCleanup = () => win.removeEventListener('scroll', onScroll);
  }

  ngOnDestroy(): void {
    this.scrollCleanup?.();
  }
}
