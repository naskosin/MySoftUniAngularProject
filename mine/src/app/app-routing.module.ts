import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './feautures/pages/page-not-found/page-not-found.component';
import { HomePageComponent } from './feautures/pages/home-page/home-page.component';
import { MyCatchesComponent } from './auth/my-catches/my-catches.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { GalleryComponent } from './feautures/gallery/gallery.component';
import { AuthGuard } from './core/guards/auth.guard';
import { LoggedGuard } from './core/guards/logged.guard';
import { AboutPageComponent } from './feautures/pages/about-page/about-page.component';

const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
},

{
    path: 'home',
    component: HomePageComponent
},

{
  path: 'about',
  component: AboutPageComponent
},

{  path: '**',
  pathMatch: 'full',
  component: PageNotFoundComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
