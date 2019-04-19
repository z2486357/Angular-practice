import { NgModule } from "@angular/core";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";
import { HomeComponent } from "./home/home.component";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./auth-guard.service";
import { canDeactivateGuard } from "./servers/edit-server/can-deactivate-guard.service";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { ServerResolver } from "./servers/server/server-resolver.service";

const appRoutes:Routes=[
    {path:'',component:HomeComponent},
    {path:'users',component:UsersComponent, children:[
      {path:':id/:name',component:UserComponent},
    ]},
    {path:'servers',canActivateChild:[AuthGuard],component:ServersComponent, children:[
      {path:':id',component:ServerComponent,resolve:{server:ServerResolver}},
      {path:':id/edit',canDeactivate:[canDeactivateGuard],component:EditServerComponent},
    ]},
    // {path:'not-found',component:PageNotFoundComponent},
    {path:'not-found',component:ErrorPageComponent,data:{message:'Page Not Found!'}},
    {path:'**',redirectTo:'/not-found'} //should be the last one
  ]
  
@NgModule({
    imports: [
        // RouterModule.forRoot(appRoutes,{useHash:true})
        RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]
})
export class AppRoutingModule{

}