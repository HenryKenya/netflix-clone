import { Routes, RouterModule } from "@angular/router"
import { DetailsComponent } from "./details.component"
import { NgModule } from "@angular/core"



const routes: Routes = [
    {path:'details', component: DetailsComponent}
  ]

  @NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
  })
  
  export class DetailsRoutingModule {}