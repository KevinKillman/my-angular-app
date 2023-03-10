import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { LoggingService, AccountsService } from './services';

@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    ServerElementComponent,
    BasicHighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [LoggingService, AccountsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
