import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {Routes,RouterModule} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { FirstregisterComponent } from './firstregister/firstregister.component';
import { Nav2Component } from './nav2/nav2.component';
import { RecruiterloginComponent } from './recruiterlogin/recruiterlogin.component';
import { RecruitregisterComponent } from './recruitregister/recruitregister.component';
import { Nav3Component } from './nav3/nav3.component';
import { Nav4Component } from './nav4/nav4.component';
import { AvailablejobComponent } from './availablejob/availablejob.component';
import { AppliedjobComponent } from './appliedjob/appliedjob.component';
import { SeekersComponent } from './seekers/seekers.component';
import { PostedjobsComponent } from './postedjobs/postedjobs.component';
import { PostjobComponent } from './postjob/postjob.component';
import { FormsModule } from '@angular/forms';
import { JobapplicationComponent } from './jobapplication/jobapplication.component';



const ap:Routes=[{path:'',component:HeaderComponent},
                {path:'firstlogin',component:FirstpageComponent},
                {path:'employeelogin',component:LoginComponent},
                {path:'recruiterlogin',component:RecruiterloginComponent},
                {path:'firstregister',component:FirstregisterComponent},
                { path:'employeeregister',component:RegisterComponent},
                { path:'recruiterregister',component:RecruitregisterComponent},
                { path:'available',component:AvailablejobComponent},
                { path:'applied',component:AppliedjobComponent},
                { path:'seekers',component:SeekersComponent},
                { path:'posted',component:PostedjobsComponent},
                { path:'post',component:PostjobComponent},
                { path:'jobapplication',component:JobapplicationComponent},];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    RegisterComponent,
    FirstpageComponent,
    FirstregisterComponent,
    Nav2Component,
    RecruiterloginComponent,
    RecruitregisterComponent,
    Nav3Component,
    Nav4Component,
    AvailablejobComponent,
    AppliedjobComponent,
    SeekersComponent,
    PostedjobsComponent,
    PostjobComponent,
    JobapplicationComponent,
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ap),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
