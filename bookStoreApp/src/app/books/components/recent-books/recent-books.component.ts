import { Component, OnInit } from '@angular/core';
import { BookModel } from '../../models/book.model';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-recent-books',
  templateUrl: './recent-books.component.html',
  styleUrls: ['./recent-books.component.scss']
})
export class RecentBooksComponent implements OnInit {

  public recentBooks:BookModel[];

  constructor(private _bookservice:BookService){}

  ngOnInit(): void {
    this.getRecentBooks();
  }

  public getRecentBooks():void{
    this.recentBooks = this._bookservice.recentBooks();
  }

}
