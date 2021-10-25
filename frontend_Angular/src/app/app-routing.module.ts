import { BaseComponent } from './base/base.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { AuthService } from './auth/auth.service';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  // for the default url (url with no path)
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', redirectTo: '/base/home', pathMatch: 'full' },

  // home component having the menu (navigation)
  { 
    path: 'base', component: BaseComponent,
    children: [
      {path:  'home',component:HomeComponent},
      { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
    
    ],
   canActivate: [AuthService]
  },
  
  //for signin and signup
 { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
