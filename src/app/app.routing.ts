import { LoginComponent } from './login/login.component';
import { Routes } from "../../node_modules/@angular/router";

const appRoutes:Routes=[
    {path:'login',component:LoginComponent},
    {path:'',redirectTo:'login',pathMatch:'full'}
];

