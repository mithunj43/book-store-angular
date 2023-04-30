import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-add-book-reactive',
  templateUrl: './add-book-reactive.component.html',
  styleUrls: ['./add-book-reactive.component.scss']
})
export class AddBookReactiveComponent implements OnInit {

  public titleErrorMessage: string;
  public authorErrorMessage: string;
  prices: any[] = [
    { value: 100, viewValue: '100' },
    { value: 200, viewValue: '200' },
    { value: 300, viewValue: '300' },
  ];
  currencies: any[] = [
    { value: 'USD', viewValue: 'US Dollar' },
    { value: 'INR', viewValue: 'Indian Rupees' },
  ];

  public addBookForm: FormGroup;

  constructor(private _bookService: BookService, private _formBuilder: FormBuilder) {

  }
  ngOnInit(): void {
    this.initForm();

    const titleControl = this.addBookForm.get('title');
    titleControl?.valueChanges.subscribe(x => {
      this.validateTitleControl(titleControl as FormControl);
    });

    const authorControl = this.addBookForm.get('author');
    authorControl?.valueChanges.subscribe(x => {
      this.validateAuthorControl(authorControl as FormControl);
    });

    const formatTypeControl = this.addBookForm.get('formatType');
    formatTypeControl?.valueChanges.subscribe(x => {
      this.formatTypeChanged(x);
    });
  }

  private initForm(): void {
    this.addBookForm = this._formBuilder.group({
      title: ['this is Pooja Mithun', [Validators.required, Validators.minLength(10)]],
      author: '',
      totalPages: '',
      price: this._formBuilder.group({
        currency: '',
        value: ''
      }),
      publishedOn: '',
      isPublished: '',
      formatType: '',
      pdfFormat: '',
      docFormat: ''
    });
  }

  updateFormValues(): void {
    this.addBookForm.patchValue({
      title: 'Mithun Pooja',
      author: 'default MiPoo'
    });
  }

  saveBook(): void {
    console.log(this.addBookForm.value);
    // const book = new BookModel();
    if (this.addBookForm.valid) {
      this._bookService.addBook(this.addBookForm.value);
    }
    else {
      alert('form invalid');
    }
  }

  private validateTitleControl(titleControl: FormControl): void {
    this.titleErrorMessage = '';
    if (titleControl.errors && (titleControl.touched || titleControl.dirty)) {
      if (titleControl.errors?.['required']) {
        this.titleErrorMessage = 'This is a required field'
      }
      else if (titleControl.errors?.['minlength']) {
        this.titleErrorMessage = 'Minimum length is ' + titleControl.errors?.['minlength'].requiredLength;
      }
    }
  }

  private validateAuthorControl(authorControl: FormControl): void {
    this.authorErrorMessage = '';
    if (authorControl.errors && (authorControl.touched || authorControl.dirty)) {
      if (authorControl.errors?.['required']) {
        this.authorErrorMessage = 'This is a required field'
      }
    }
  }

  private formatTypeChanged(formatType: string): void {
    const pdfControl = this.addBookForm.get('pdfFormat');
    const docControl = this.addBookForm.get('docFormat');
    if (formatType === "pdf") {
      pdfControl?.addValidators([Validators.required, Validators.minLength(5)]);
      docControl?.clearValidators();
    }
    else if (formatType === "doc") {
      docControl?.addValidators(Validators.required);
      pdfControl?.clearValidators();
    }

    pdfControl?.updateValueAndValidity();
    docControl?.updateValueAndValidity();
  }

}
