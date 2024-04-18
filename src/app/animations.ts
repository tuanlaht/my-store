import { animate, style, transition, trigger } from '@angular/animations';

export const fadeAnimation = trigger('open-close-trigger', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('300ms', style({ opacity: 1 })),
  ]),
  transition(':leave', [animate('300ms', style({ opacity: 0 }))]),
]);
