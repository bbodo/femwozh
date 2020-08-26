import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/services/page.service';
import { PageData } from 'src/app/interfaces/pageData';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  
  pageData: PageData;

  constructor(private pageService: PageService) {}

  ngOnInit() {
    this.pageService
      .getPageData("about")
      .subscribe(data => (this.pageData = data));
  }
}
