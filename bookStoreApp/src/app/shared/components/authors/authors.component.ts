import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { __values } from 'tslib';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit{

  public data:number;

  public setData(value:number):void{
    this.data = value;
  }

  constructor(private _testService : TestService){}

  ngOnInit(): void {
  }

  public btnClick():void{
   this._testService.myData = 'This data is from my child - Mithun Pooja';
  }

}
