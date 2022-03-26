
    import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { GallerDetailsComponent } from './galler-details/galler-details.component';
import { CreateCatchComponent } from './newcatch/create-catch/create-catch.component';
const routes: Routes =[
    {
        path: 'gallery',
        component: GalleryComponent
    },
    {
        path: 'gallery/:fishid',
        component: GallerDetailsComponent
    },
    {
        path: 'createCatch',
        component: CreateCatchComponent
    }
]

export const GalleryRoutingModule = RouterModule.forChild(routes);