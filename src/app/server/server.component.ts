import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverID: number = 10; //normally serverID=10; is good
    serverStatus: string = 'offline';

    getServerStatus(){
        return this.serverStatus;
    }
}