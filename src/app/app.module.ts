import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";

import { FlexLayoutModule } from "@angular/flex-layout";
import { CreateBeerComponent } from './create-beer/create-beer.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { UpdateBeerComponent } from './update-beer/update-beer.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { MatBadgeModule } from "@angular/material/badge";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";


@NgModule({
  declarations: [
    AppComponent,
    CreateBeerComponent,
    BeerListComponent,
    UpdateBeerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatBadgeModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
