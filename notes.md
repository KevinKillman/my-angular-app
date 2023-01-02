# Angular Directives
* \* = structural directive. Manipulating DOM.
* \# = local reference, used like \<ng-template \#*variable*>\</ng-template>
* Attribute directives do not Manipulate DOM like structural directives. Only change element they are placed on.


# Custom Binding
### Properties
* @Input() to emit a custom property. Allows binding outside of component.<br>```@Input() element:{type:string, name:string, content:string}```<br> Can create an alias for property by using @Input('alias').

### Events
1. Create Event Emitter <br>```eventName = new EventEmitter<{name: string, content: string}>();```
2. Call .emit() on the created EventEmitter <br> ```this.eventName.emit({name:this.name,content:this.content})```
3. Decorate Event Emitter <br> ```@Output() eventName = new EventEmitter<{name: string, content: string}>();``` <br> - Can also use alias
4. React to event outside component<br>```(eventName)="eventHandlerFunction()"```
