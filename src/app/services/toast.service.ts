import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ToastState {
  success: string;
  warning: string;
  danger: string;
}

export const TOAST_STATE: ToastState = {
  success: 'success-toast',
  warning: 'warning-toast',
  danger: 'danger-toast',
};

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  public isVisible$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  public toastMessage$: BehaviorSubject<string> = new BehaviorSubject<string>(
    'Toast message here'
  );
  public toastState$: BehaviorSubject<string> = new BehaviorSubject<string>(
    TOAST_STATE.success
  );
  private toastTimer: any;

  constructor() {}

  showToast(toastState: keyof ToastState, toastMsg: string): void {
    this.toastState$.next(toastState);
    this.toastMessage$.next(toastMsg);
    this.isVisible$.next(true);

    if (this.toastTimer) {
      clearTimeout(this.toastTimer);
    }

    this.toastTimer = setTimeout(() => {
      this.isVisible$.next(false);
    }, 2000);
  }

  dismissToast(): void {
    this.isVisible$.next(false);
  }
}
