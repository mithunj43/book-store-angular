import { Component, Input, OnInit } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit{

  @Input() 
  get data(){
    return this._data
  }
  set data(value:number)
  {
    this._data = ++value;
  }

  private _data:number;
  @Input() showAuthors:boolean;
  constructor(){}

  ngOnInit(): void {
  }

}
