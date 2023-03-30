import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Pour les formulaires reactifs
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CdComponent } from './cd/cd.component';
import { HeaderComponent } from './header/header.component';
import { ListCDsComponent } from './list-cds/list-cds.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NewCDComponent } from './new-cd/new-cd.component';

// Pour les requetes
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CdComponent,
    HeaderComponent,
    ListCDsComponent,
    HomeComponent,
    NewCDComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    // Pour les formulaires reactifs
    ReactiveFormsModule,

    // Pour les requetes
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
