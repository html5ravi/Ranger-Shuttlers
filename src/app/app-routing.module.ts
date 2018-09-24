import { NgModule } from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CourtShareComponent } from './court-share/court-share.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContributorsComponent } from './contributors/contributors.component';

    const routes: Routes = [
        {
            path:'',
            redirectTo:'home',
            pathMatch:'full'
        },
        {
            path: 'home',
            component: DashboardComponent,
        },
        {
            path:'people',
            component:ContributorsComponent
        },
        {
            path:'share',
            component:CourtShareComponent
        },
        {
            path:'**',
            // redirectTo:'home',
            component:NotFoundComponent
        }
    ];

    @NgModule({
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports: [
            RouterModule
        ],
        declarations: []
    })
    export class AppRoutingModule { }