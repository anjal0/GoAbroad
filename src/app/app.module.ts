import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService} from './auth.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UniversityComponent } from './university/university.component';
import { AddUniversityComponent } from './add-university/add-university.component';
import { SingleUniversityComponent } from './single-university/single-university.component';
import { UniversityUpdateComponent } from './university-update/university-update.component';
import { PlacesComponent } from './places/places.component';
import { ExamComponent } from './exam/exam.component';
import { TokenInterceptorService } from './token-interceptor.service';
import {AuthGuard} from './auth.guard';
import { from } from 'rxjs';
import { ResumeComponent } from './resume/resume.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    UniversityComponent,
    AddUniversityComponent,
    SingleUniversityComponent,
    UniversityUpdateComponent,
    PlacesComponent,
    ExamComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService,AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
