import { Component, OnInit } from '@angular/core';
import { PageData } from 'src/app/interfaces/pageData';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pageData: PageData;

  constructor(private pageService: PageService) {}

  ngOnInit() {
    this.pageService
      .getPageData("home")
      .subscribe(data => (this.pageData = data));
  }
}
