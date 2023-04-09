import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { AuthorsComponent } from 'src/app/shared/components/authors/authors.component';
import { AuthorModel } from 'src/app/shared/models/authors.model';
import { CounterService } from 'src/app/shared/services/counter.service';
import { TestService } from 'src/app/shared/services/test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('btnCounter') btnCounter:ElementRef;

  public count: number = 0;
  public test: boolean = false;
  public address: string = 'India';
  public obj: AuthorModel = { id: 2125, name: "PoojaMithun" }

  constructor(public _testService: TestService) {
    console.log('Hello from Parent constructor');
  }
  ngAfterViewInit(): void {
    console.log(this.btnCounter);
    this.btnCounter.nativeElement.innerHTML = 'Button text updated';
  }

  ngOnInit(): void {
    console.log('Hello from Parent ngOn init');
  }

  public counter(): void {
    this.count++;
    this.test = !this.test;
    this.obj.id = this.count;
    this.address = this.address + this.count
  } 
}
