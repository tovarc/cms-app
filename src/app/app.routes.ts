import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then((m) => m.LoginComponent),
  },

  {
    path: 'sign-up',
    loadComponent: () =>
      import('./sign-up/sign-up.component').then((m) => m.SignUpComponent),
  },

  {
    path: 'reset-password',
    loadComponent: () =>
      import('./reset-password/reset-password.component').then(
        (m) => m.ResetPasswordComponent,
      ),
  },

  {
    path: 'terms-of-use',
    loadComponent: () =>
      import('./terms-of-use/terms-of-use.component').then(
        (m) => m.TermsOfUseComponent,
      ),
  },

  {
    path: 'activities',
    loadComponent: () =>
      import('./activities/activities.component').then(
        (m) => m.ActivitiesComponent,
      ),
  },

  {
    path: 'activity/:id',
    loadComponent: () =>
      import('./single/single.component').then((m) => m.SingleComponent),
  },

  {
    path: 'start',
    loadComponent: () =>
      import('./start/start.component').then((m) => m.StartComponent),
  },

  {
    path: 'finish',
    loadComponent: () =>
      import('./finish/finish.component').then((m) => m.FinishComponent),
  },

  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(
        (m) => m.DashboardComponent,
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./home/home.component').then((m) => m.HomeComponent),
      },

      {
        path: 'clients',
        loadComponent: () =>
          import('./clients/clients.component').then((m) => m.ClientsComponent),
      },
    ],
  },
];
