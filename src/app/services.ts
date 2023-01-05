export class LoggingService {

  logStatusChange(status: string) {
    console.log(status);
  }

}

export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active',
      type: 'server'
    }, {
      name: 'Test Account',
      status: 'inactive',
      type: 'server'
    }, {
      name: 'Hidden account',
      status: 'unknown',
      type: 'server'
    }
  ];
  addAccount(data: { name: string, status: string, type: string }) {
    this.accounts.push(data);
  }
  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
  }
}

