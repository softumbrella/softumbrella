import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-jipconfig-page',
  imports: [HeaderComponent, RouterLink],
  templateUrl: './jipconfig-page.component.html',
  styleUrl: './jipconfig-page.component.css',
})
export class JipconfigPageComponent implements OnInit {
  readonly downloadUrl = 'https://downloads.jipconfig.com/releases/JipConfig_1.0.0.dmg';

  constructor(
    private readonly title: Title,
    private readonly meta: Meta,
  ) {}

  ngOnInit(): void {
    this.title.setTitle('JipConfig | Soft Umbrella');
    this.meta.updateTag({
      name: 'description',
      content:
        'Download JipConfig, a native macOS app for controlling local development processes, environment profiles, and system metrics.',
    });
  }
}
