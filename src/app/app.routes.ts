import { Routes } from '@angular/router';
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {DashboardComponent} from "./tutoring/components/dashboard/dashboard.component";
import {RegisterComponent} from "./public/pages/register/register.component";
import {LoginComponent} from "./public/pages/login/login.component";
import {SettingsComponent} from "./public/pages/settings/settings.component";

export const routes: Routes = [
  {path:'Dashboard',                component:DashboardComponent},
  {path:'LogIn',                  component:LoginComponent},
  {path:'Register',                 component:RegisterComponent},
  { path: 'Settings',               component: SettingsComponent },
  { path: '',                       redirectTo: 'Dashboard', pathMatch: 'full' },
  { path: '**',                     component: PageNotFoundComponent }

];
