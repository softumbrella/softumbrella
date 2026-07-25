import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { JipconfigPageComponent } from './jipconfig-page.component';

describe('JipconfigPageComponent', () => {
  let component: JipconfigPageComponent;
  let fixture: ComponentFixture<JipconfigPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JipconfigPageComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(JipconfigPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('describes command checks without promising complete detection', () => {
    const element: HTMLElement = fixture.nativeElement;
    const text = element.textContent ?? '';
    const screenshots = element.querySelectorAll<HTMLImageElement>('.command-review-grid img');

    expect(text).toContain('these checks are pattern-based');
    expect(text).toContain('may not identify every unsafe command');
    expect(screenshots.length).toBe(2);
    expect(Array.from(screenshots, (image) => image.getAttribute('src'))).toEqual([
      '/assets/jipconfig/command-threat-review-light.png',
      '/assets/jipconfig/command-threat-blocked-light.png',
    ]);
  });

  it('links to the version 2.0 download', () => {
    expect(component.downloadUrl).toBe(
      'https://downloads.jipconfig.com/releases/JipConfig-2.0.dmg',
    );
  });
});
