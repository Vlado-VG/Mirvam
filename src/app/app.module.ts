import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navigation_component/navbar.component';
import { HomeComponent } from './home_component/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LessonsComponent } from './lessons/lessons.component';
import { EpisodeComponent } from './episode/episode.component';
import { VideoPageComponent } from './video-page/video-page.component';


@NgModule({
  declarations: [
    AppComponent, 
    NavbarComponent, HomeComponent, AboutUsComponent, LessonsComponent, EpisodeComponent, VideoPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
