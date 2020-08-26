import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/services/page.service';
import { PageData } from 'src/app/interfaces/pageData';

@Component({
  selector: 'app-mitmachen',
  templateUrl: './mitmachen.component.html',
  styleUrls: ['./mitmachen.component.css']
})
export class MitmachenComponent implements OnInit {

  
  pageData: PageData;

  constructor(private pageService: PageService) {}

  ngOnInit() {
    this.pageService
      .getPageData("mitmachen")
      .subscribe(data => (this.pageData = data));
  }
}
