import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { CreateRFQComponent } from './pages/create-rfq/create-rfq.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [

    {
        path:"",
        redirectTo:"home",
        pathMatch:"full"
    },
    {
        path:'home',
        component:LandingComponent
    },
    {
        path:'register',
        component:RegistrationComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'create-rfq',
        component:CreateRFQComponent
    }
];
