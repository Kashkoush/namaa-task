import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';


export const AppRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'users', component: UsersComponent},
    {path: 'details/:id', component: DetailsComponent},


    {path: '**', component: HomeComponent}
];


