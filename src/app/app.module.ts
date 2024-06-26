import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadmenuComponent } from './headmenu/headmenu.component';
import { PropertiesComponent } from './properties/properties.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ContactComponent } from './contact/contact.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { RegisterpageComponent } from './registerpage/registerpage.component';
import { IndividualPropertyComponent } from './individual-property/individual-property.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadmenuComponent,
    PropertiesComponent,
    PageNotFoundComponent,
    HomeComponent,
    AboutComponent,
    LoginpageComponent,
    ContactComponent,
    AdminPanelComponent,
    RegisterpageComponent,
    IndividualPropertyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
