import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers:[LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private loggingService:LoggingService,
              private accointsService:AccountsService){
                
              }

  onSetTo(status: string) {
    this.accointsService.updateStatus(this.id,status)
    // this.loggingService.logStatusChange(status)
    this.accointsService.statusUpdated.emit(status)
  }
}
