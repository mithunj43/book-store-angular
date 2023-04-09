import { AfterContentChecked, AfterContentInit, Component, ContentChild, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { __values } from 'tslib';
import { AuthorModel } from '../../models/authors.model';
import { TestService } from '../../services/test.service';
import { AuthorsAddressComponent } from '../authors-address/authors-address.component';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked {

  @Input() data: number;
  @Input() data2: boolean;
  @Input() author: AuthorModel;
  @ContentChild(AuthorsAddressComponent) authAddress:AuthorsAddressComponent;

  public childCounter:number = 0;

  constructor() {
    console.log('Hello from Child constructor');
  }
  ngAfterContentInit(): void {
    console.log('After content Init', this.authAddress?.address)
  }
  ngAfterContentChecked(): void {
    console.log('After content checked', this.authAddress?.address)
  }
  ngDoCheck(): void {
    //console.log('Docheck', this.author)
  }

  ngOnChanges(changes: SimpleChanges): void {
    //console.log(changes)
  }

  ngOnInit(): void {
    console.log('Hello from Child ngOn init');
  }

  public incCounter():void{
    this.childCounter++;
  }
}
