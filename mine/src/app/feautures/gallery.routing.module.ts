
    import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { GallerDetailsComponent } from './galler-details/galler-details.component';
import { CreateCatchComponent } from './newcatch/create-catch/create-catch.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { TopFiveComponent } from './top-five/top-five.component';
const routes: Routes =[
    
    {
        path: 'gallery/:fishid',
        component: GallerDetailsComponent
    },
    {
        path: 'createCatch',
        component: CreateCatchComponent
    },
    {
        path: 'editpage/:fishid',
        component: EditPageComponent
    },
    {
        path: 'topFive',
        component: TopFiveComponent
    }
]

export const GalleryRoutingModule = RouterModule.forChild(routes);