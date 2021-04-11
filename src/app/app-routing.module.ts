import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { UniversityComponent } from './university/university.component';
import { AddUniversityComponent } from './add-university/add-university.component';
import { SingleUniversityComponent } from './single-university/single-university.component';
import { UniversityUpdateComponent } from './university-update/university-update.component';
import { PlacesComponent } from './places/places.component';
import { ExamComponent } from './exam/exam.component';
import { AuthGuard} from './auth.guard';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'',component:WelcomeComponent},
  {path:'home',component:HomeComponent},
  { path:'university', component: UniversityComponent },
  {path:'adduni',canActivate: [AuthGuard], component: AddUniversityComponent},
  { path:'university/:id', component: SingleUniversityComponent },
  { path:'uniupdate/:id', component: UniversityUpdateComponent },
  {path:'places', component: PlacesComponent},
  {path:'exam', component: ExamComponent},
  {path:'resume', component:ResumeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
