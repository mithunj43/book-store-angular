import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';

const routes: Routes = [
      { path: '', component:AllBooksComponent},
      // { path: 'all-books', component: AllBooksComponent },
      // { path: 'book-details/:id/author/:authorId', component: BookDetailsComponent },
      { path: ':id', component: BookDetailsComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }