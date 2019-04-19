import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { ServersService } from "../servers.service";
import { Injectable } from "@angular/core";

interface Server{
    id:number
    name:string
    status:string
}
@Injectable()
export class ServerResolver implements Resolve<Server>{
    constructor(private serverservice:ServersService){}
    resolve(route:ActivatedRouteSnapshot,
            state:RouterStateSnapshot) : Observable<Server> | Promise<Server> | Server{
                return this.serverservice.getServer(+route.params['id'])
    }
}