import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from './login/login.component';
import {NavbarComponent} from './navbar/navbar.component';
import {ArticleComponent} from './article/article.component';
import {ArticlelistComponent} from './articlelist/articlelist.component';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import {AuthService} from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    ArticleComponent,
    ArticlelistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
      path: 'navbar',
      component: NavbarComponent
      },
      {
        path:'register',
        component: RegisterComponent
      },
      {
        path:'login',
        component: LoginComponent
      },
      {
        path:'article',
        component: ArticleComponent
      },
      {
        path:'articlelist',
        component: ArticlelistComponent
      }
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
