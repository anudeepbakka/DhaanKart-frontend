import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CampaignOverviewComponent } from './campaign-overview/campaign-overview.component';

const routes: Routes = [
  {
    path:"home", component:HomeComponent
  },
  {
    path:"overview", component:CampaignOverviewComponent
  },
  {
    path:"", redirectTo:"/home" , pathMatch:"full"
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
