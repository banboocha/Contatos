import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { MenuPage } from './pages/menu/menu.page';

const routes: Routes = [

  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule) },
  { path: 'logout', loadChildren: () => import('./pages/logout/logout.module').then(m => m.LogoutPageModule) },
  { path: 'signup', loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupPageModule) },
  
  {
    path: '',
    component: MenuPage,
    canActivate: [AuthGuard],
    children: [
      { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule) },

      
      { path: 'loading', loadChildren: () => import('./pages/loading/loading.module').then(m => m.LoadingPageModule) },
      { path: 'add', loadChildren: () => import('./pages/add/add.module').then(m => m.AddPageModule) },
    ]
  },
  { path: 'update/:contato', loadChildren: () => import('./pages/update/update.module').then(m => m.UpdatePageModule) },
  { path: 'resetpassword', loadChildren: () => import('./pages/resetpassword/resetpassword.module').then(m => m.ResetpasswordPageModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
