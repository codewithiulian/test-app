import { AuthorService } from './../author.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {
  title = "Authors";
  authors;
  constructor(service: AuthorService) {
    this.authors = service.getAuthors();
  }

  ngOnInit(): void {
  }

}
