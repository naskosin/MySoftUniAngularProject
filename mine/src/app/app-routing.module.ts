import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './feautures/pages/page-not-found/page-not-found.component';

const routes: Routes = [

//  {
//    path: '',
//    pathMatch: 'full',
//    redirectTo: 'home',
//},
//{
//    path: 'home',
//    component: HomeComponent
//},
{
    path: '**',
    pathMatch: 'full',
    component: PageNotFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
