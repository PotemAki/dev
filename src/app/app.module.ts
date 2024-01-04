import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule } from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion'
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatChipsModule} from '@angular/material/chips';
import {MatDialogModule } from '@angular/material/dialog';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPageComponent } from './main-page/main-page.component';
import { ProjectsComponent } from './main-page/projects/projects.component';
import { DetailsComponent } from './main-page/projects/details/details.component';
import { SkillsComponent } from './main-page/projects/skills/skills.component';
import { AboutMeComponent } from './main-page/projects/about-me/about-me.component';
import { CvComponent } from './cv/cv.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    ProjectsComponent,
    DetailsComponent,
    SkillsComponent,
    AboutMeComponent,
    CvComponent,
    NotFoundPageComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatInputModule,
    MatExpansionModule,
    MatCardModule,
    MatTooltipModule,
    MatChipsModule,
    MatDialogModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
