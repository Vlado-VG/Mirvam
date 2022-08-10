import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ArticlesComponent } from './articles/articles.component';
import { HomeComponent } from './home_component/home.component';
import { LessonsComponent } from './lessons/lessons.component';
import { StreamsComponent } from './streams/streams.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about_us',
    component: AboutUsComponent
  },
  {
    path: 'lessons',
    component: LessonsComponent
  },
  {
    path: 'streams',
    component: StreamsComponent
  },
  {
    path: 'articles',
    component: ArticlesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
