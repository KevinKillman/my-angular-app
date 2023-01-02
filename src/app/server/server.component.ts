import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: "./server.component.html",
  styles: [`
  .online{
    color: white;
  }
  `]
})

export class ServerComponent {
  serverName: string = "Server";
  serverId: number = 10;
  serverStatus: string = 'offline';
  constructor() {
    setTimeout(() => { this.serverStatus == 'offline' ? this.serverStatus = 'online' : null; }, Math.random() * 10000);
  }
  getServerColor() {
    return this.serverStatus == 'online' ? 'green' : 'red';
  }
}
