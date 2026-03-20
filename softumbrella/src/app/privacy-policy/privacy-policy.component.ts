import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-privacy-policy',
  imports: [HeaderComponent, RouterLink],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.css',
})
export class PrivacyPolicyComponent implements OnInit {
  constructor(
    private readonly title: Title,
    private readonly meta: Meta,
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Privacy Policy | Soft Umbrella');
    this.meta.updateTag({
      name: 'description',
      content:
        'Privacy Policy for Soft Umbrella — how we collect, use, and protect your information.',
    });
  }
}
