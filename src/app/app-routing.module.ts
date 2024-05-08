import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadmenuComponent } from './headmenu/headmenu.component';
import { PropertiesComponent } from './properties/properties.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginpageComponent } from './loginpage/loginpage.component';

const routes: Routes = [
    {path: 'home',
     component:HomeComponent},

    {path:'properties',
     component:PropertiesComponent},

     {path:'about',
     component:AboutComponent},

     {path:'login',
     component:LoginpageComponent},

    {path:'', 
     redirectTo:'/home',
     pathMatch: 'full'},

    {path: '**',
     component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
