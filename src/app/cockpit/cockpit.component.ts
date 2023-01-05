import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{ name: string, type: string, status: string }>();
  @Output() blueprintCreatedd = new EventEmitter<{ name: string, type: string, status: string }>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContent', { static: true }) serverContentInput: ElementRef;

  onAddServer(serverNameInput: HTMLInputElement) {
    this.serverCreated.emit({ name: serverNameInput.value, type: "server", status: this.serverContentInput.nativeElement.value })
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.serverCreated.emit({ name: serverNameInput.value, type: "blueprint", status: this.serverContentInput.nativeElement.value })
  }
}
