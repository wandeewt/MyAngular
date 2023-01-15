import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { HeroComponent } from './component/hero/hero.component';
import { PostsComponent } from './component/posts/posts.component';
import { Exam3Component } from './component/exam3/exam3.component';
import { Exam4Component } from './component/exam4/exam4.component';
import { Exam5Component } from './component/exam5/exam5.component';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroComponent,
    PostsComponent,
    Exam3Component,
    Exam4Component,
    Exam5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
