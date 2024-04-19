import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { ToastService } from '../../services/toast.service';
import { CommonModule } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroCheckCircleSolid } from '@ng-icons/heroicons/solid';
import { heroXMark } from '@ng-icons/heroicons/outline';
@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css',
  providers: [provideIcons({ heroCheckCircleSolid, heroXMark })],
  animations: [
    trigger('toastTrigger', [
      transition(':enter', [
        style({ transform: 'translateY(-200%)' }),
        animate('200ms ease-in-out', style({ transform: 'translateY(0%)' })),
      ]),
      transition(':leave', animate('200ms', style({ opacity: '0' }))),
    ]),
  ],
})
export class ToastComponent {
  isVisible = false;
  toastMessage = 'Toast work!';
  toastClass: string[] = ['toast-default'];

  constructor(public toast: ToastService) {}

  dismiss(): void {
    this.toast.dismissToast();
  }
}
