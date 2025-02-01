import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  var isUser = localStorage.getItem('username');

  const router = inject(Router);

  if (isUser != null) return true;
  else {
    router.navigateByUrl('/login');
    return false;
  }
};
