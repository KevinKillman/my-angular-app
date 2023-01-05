import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { LoggingService } from '../services';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  providers: [LoggingService]
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() element: { name: string, type: string, content: string }
  @Input() name: string;
  @ViewChild('header', { static: true }) header: ElementRef;
  @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef;

  constructor(private logger: LoggingService) {
    this.logger.logStatusChange('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges called");
    console.log(changes)
  }
  ngOnInit(): void {
    console.log("ngOnInit called")
  }
  ngDoCheck(): void {
    console.log("ngDoCheck called")
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit called")
    console.log('Text of Paragraph: ' + this.paragraph.nativeElement.textContent);
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked called")
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy called")
  }
}
