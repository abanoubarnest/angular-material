import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutsModule } from './layouts';
import { CommonLayoutComponent } from './layouts/common-layout';
import { ChartsComponent } from './pages/charts';
import { DashboardComponent } from './pages/dashboard';
import { ProfileComponent } from './pages/forms/profile/profile.component';


// @ts-ignore
// @ts-ignore
// @ts-ignore
@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        { path: '', redirectTo: 'app/dashboard', pathMatch: 'full' },
        { path: 'app', component: CommonLayoutComponent,
        children: [
          { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
          { path: 'forms', component: ProfileComponent, pathMatch: 'full' },
          { path: 'charts', component: ChartsComponent, pathMatch: 'full' },
          { path: '**', redirectTo: '/ypages/404' },
        ] }, // add 'canActivate: AuthGuard' for catching unauth users
        { path: 'ui', loadChildren: () => import('./pages/ui/ui.module').then(m => m.UIModule) },
        { path: 'pages', loadChildren: () => import('./pages/pages/pages.module').then(m => m.PagesModule) },
        { path: '**', redirectTo: '/pages/404' },
      ],
      { useHash: true },
    ),
    LayoutsModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
