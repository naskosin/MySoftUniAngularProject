import { RouterModule, Routes } from "@angular/router"
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { MyCatchesComponent } from './my-catches/my-catches.component'

const routes: Routes = [
   // {
   //     path: 'login',
   //     component: LoginComponent
   // },
   // {
   //     path: 'register',
   //     component: RegisterComponent
   // },
   //{
   //    path: 'mycatches',
   //    component: MyCatchesComponent
   //}
]
export const AuthRoutingModule = RouterModule.forChild(routes)