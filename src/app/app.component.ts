import { Component } from '@angular/core';
import { AccountsService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountsService]
})
export class AppComponent {
  accounts = [];


  constructor(private accountService: AccountsService) {
    this.accounts = this.accountService.accounts
  }

  onAddElement(creationData: { name: string, status: string, type: string }) {
    this.accountService.addAccount(creationData);
  }

  onChangeFirst() {
    this.accounts[0].name = "Changed!";
  }
  onDestroyFirst() {
    this.accounts.splice(0, 1)
  }
}
