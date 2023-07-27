import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@main-project/account/feature-users').then(
        (m) => m.AccountFeatureUsersModule
      ),
  },
];
