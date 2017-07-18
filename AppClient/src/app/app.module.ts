import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HttpModule } from '@angular/http'

//components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ActivityComponent } from './components/activity/activity.component';
import { MyJobComponent } from './components/my-job/my-job.component';
import { MyPostComponent } from './components/my-post/my-post.component';
import { NotificationComponent } from './components/notification/notification.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { MainComponent } from './components/main/main.component';

//services
import { PostServiceService } from './services/post-service.service';

const APP_ROUTES = [
  {path: 'login', component: LoginComponent},
  {
    path: 'home', 
    component: HomeComponent, 
    children: [
      { path: 'main', component: MainComponent  },
      { path: 'activities', component: ActivityComponent  },
      { path: 'myJob', component: MyJobComponent  },
      { path: 'myPost', component: MyPostComponent  },
      { path: 'notification', component: NotificationComponent  },
      { path: 'newPost', component: NewPostComponent  }
    ]
  },
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ActivityComponent,
    MyJobComponent,
    MyPostComponent,
    NotificationComponent,
    NewPostComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpModule
  ],
  providers: [
    PostServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
