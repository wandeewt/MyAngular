import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { HeroComponent } from './component/hero/hero.component';
import { PostsComponent } from './component/posts/posts.component';
import { Exam3Component } from './component/exam3/exam3.component';
import { Exam4Component } from './component/exam4/exam4.component';
import { Exam5Component } from './component/exam5/exam5.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'hero', component: HeroComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'exam3', component: Exam3Component },
  { path: 'exam4', component: Exam4Component },
  { path: 'exam5', component: Exam5Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
