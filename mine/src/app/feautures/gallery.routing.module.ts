
    import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { GallerDetailsComponent } from './galler-details/galler-details.component';
import { CreateCatchComponent } from './newcatch/create-catch/create-catch.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { TopFiveComponent } from './top-five/top-five.component';
import { AuthGuard } from '../core/guards/auth.guard';
const routes: Routes =[
    {
        path: '',
        pathMatch: 'full',
        component: GalleryComponent
    },
    {
        path: ':fishid',
        component: GallerDetailsComponent,
        canActivate: [AuthGuard],
      // children: [{
      //  path: ':fishid',
      //  component: GallerDetailsComponent,
      // }
      //  
      // ]

    },
    {
        path: 'fish/:fishid',
        component: GallerDetailsComponent,
        canActivate: [AuthGuard]

    },
    {
        path: 'catch/create',
        component: CreateCatchComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'editpage/:fishid',
        component: EditPageComponent
    },
    {
        path: 'catch/topFive',
        component: TopFiveComponent,
        canActivate: [AuthGuard]

    }
]

export const GalleryRoutingModule = RouterModule.forChild(routes);