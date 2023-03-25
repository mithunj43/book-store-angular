import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // public name: string = '';
  // public lastName: string = '';
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // this.route.queryParams.subscribe(queryparam => {
    //   this.name = queryparam['name'];
    //   this.lastName = queryparam['lastname'];
    //   console.log(queryparam);
    // });
  }

  // goToSignup():void{
  //   this.router.navigate(['/auth/signup']);
  // }

  // goToBookDetails(id:number, authorId:number):void{
  //   this.router.navigate(['/public/book-details',id,'author',authorId],
  //   {queryParams:{name:'Pooja Mithun', email:'poo'}});
  // }
}
