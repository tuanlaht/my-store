import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroShoppingCart } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgIconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  providers: [provideIcons({ heroShoppingCart })],
})
export class HeaderComponent {}
