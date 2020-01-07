import { Routes, RouterModule } from "@angular/router"
import { LandingComponent } from "./components/landing/landing.component"
import { NgModule } from "@angular/core"


const routes: Routes = [
    {path:'',component: LandingComponent},
    {path:'details', redirectTo: '/details'}
  ]

  @NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
  })
  
  export class AppRoutingModule {}
