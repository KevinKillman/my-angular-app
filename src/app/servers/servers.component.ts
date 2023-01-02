import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus: string = 'No server was created';
  serverName: string = "TestServer";
  serverCreated: boolean = false;
  servers = ['TestServer', 'TestServer2']

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created. Name is ' + this.serverName;
    this.servers.push(this.serverName);
  }

  //used with one-way data-binding
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
