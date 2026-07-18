import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-products-page',
  imports: [HeaderComponent, RouterLink],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css',
})
export class ProductsPageComponent implements OnInit {
  readonly jipConfigDownloadUrl = 'https://downloads.jipconfig.com/releases/JipConfig-1.0.2.dmg';

  constructor(
    private readonly title: Title,
    private readonly meta: Meta,
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Products | Soft Umbrella');
    this.meta.updateTag({
      name: 'description',
      content: 'Products from Soft Umbrella, including JipConfig for managing local development processes on macOS.',
    });
  }
}
