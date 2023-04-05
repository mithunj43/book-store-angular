import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit{

  @Output() myData = new EventEmitter<string>();
  public data:number;

  public setData(value:number):void{
    this.data = value;
  }

  constructor(){}

  ngOnInit(): void {
  }

  public btnClick():void{
    this.myData.emit('This data is from my child - Mithun Pooja')
  }

}
