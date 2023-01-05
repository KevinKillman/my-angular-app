# Angular Directives
* \* = structural directive. Manipulating DOM.
* \# = local reference, used like \<ng-template \#*variable*>\</ng-template><br> - Can use variable in the HTML template only. Pass to event handlers as parameter
* Attribute directives do not Manipulate DOM like structural directives. Only change element they are placed on.
* use ```<ng-content></ng-content>``` to project content into child component from calling parent.
* use @ContentChild('_variable_', {static: true}) to get local references passed to ng-content


# Custom Binding
### Properties
* @Input() to emit a custom property. Allows binding outside of component.<br>```@Input() element:{type:string, name:string, content:string}```<br> Can create an alias for property by using @Input('alias').

### Events
1. Create Event Emitter <br>```eventName = new EventEmitter<{name: string, content: string}>();```
2. Call .emit() on the created EventEmitter <br> ```this.eventName.emit({name:this.name,content:this.content})```
3. Decorate Event Emitter <br> ```@Output() eventName = new EventEmitter<{name: string, content: string}>();``` <br> - Can also use alias
4. React to event outside component<br>```(eventName)="eventHandlerFunction()"```



### Component Lifecycle Hooks
* __ngOnChanges__ - called after a bound input property changes.
* __ngOnInit__ - called once the component is initialized.
* __ngDoCheck__ - called during every change detection run
* __ngAfterContentInit__ - Called after content (ng-content) has been projected into view
* __ngAfterContentCheck__ - called every time the projected content has been checked
* __ngAfterViewInit__ - called after the component's view (and child views) has been initialized
* __ngAfterViewChecked__ - called every time the view (and child views) have been checked
* __ngOnDestroy__ - called once the component is about to be destroyed

### Custom Directives
* Can use ```@HostListener('__mouseenter__') mouseover(eventData: Event)``` pattern to listen for events as well
* use this.renderer by injecting renderer:Renderer2
* Use ```@HostBinding('style.backgroundColor') backgroundColor:string``` to bind to properties of element the directive is sitting on.
* Can define custom properties using @Input()

### ngSwitch
* [ngSwitch]="__switchVariable__",    *ngSwitchCase="__caseValue__", *ngSwitchDefault
