import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ViewComponent } from './view/view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { SiteComponent } from './site/site.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { NgParticlesModule } from 'ng-particles';
import { RoadmapComponent } from './roadmap/roadmap.component';
import { TimelineModule } from "primeng/timeline";
import {Card, CardModule} from "primeng/card";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ViewComponent,
    SiteComponent,
    UnderConstructionComponent,
    RoadmapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    NgParticlesModule,
    MatButtonModule,
    TimelineModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
