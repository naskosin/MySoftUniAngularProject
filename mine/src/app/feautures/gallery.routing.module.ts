
    import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { GallerDetailsComponent } from './galler-details/galler-details.component';
import { CreateCatchComponent } from './newcatch/create-catch/create-catch.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { TopFiveComponent } from './top-five/top-five.component';
const routes: Routes =[
    {
        path: '',
        pathMatch: 'full',
        component: GalleryComponent
    },
    {
        path: ':fishid',
        component: GallerDetailsComponent
    },
    {
        path: 'catch/create',
        component: CreateCatchComponent
    },
    {
        path: 'editpage/:fishid',
        component: EditPageComponent
    },
    {
        path: 'catch/topFive',
        component: TopFiveComponent
    }
]

export const GalleryRoutingModule = RouterModule.forChild(routes);