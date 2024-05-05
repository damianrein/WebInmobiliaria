import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadmenuComponent } from './headmenu/headmenu.component';
import { PropertiesComponent } from './properties/properties.component';

const routes: Routes = [
    {path: 'home', component:HeadmenuComponent},
    {path:'properties', component:PropertiesComponent},
    {},
    {}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
