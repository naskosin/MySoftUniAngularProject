import { RouterModule, Routes } from "@angular/router"
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { MyCatchesComponent } from './my-catches/my-catches.component'
import { LoggedGuard } from '../core/guards/logged.guard'

const routes: Routes = [
   {
       path: 'login',
       canActivate: [LoggedGuard],
       component: LoginComponent

   },
   {
       path: 'register',
       canActivate: [LoggedGuard],
       component: RegisterComponent
   },
  {
      path: 'mycatches',
      component: MyCatchesComponent
  }
]
export const AuthRoutingModule = RouterModule.forChild(routes)