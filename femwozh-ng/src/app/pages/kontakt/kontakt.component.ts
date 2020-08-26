import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/services/page.service';
import { PageData } from 'src/app/interfaces/pageData';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.css']
})
export class KontaktComponent implements OnInit {

  
  pageData: PageData;

  constructor(private pageService: PageService) {}

  ngOnInit() {
    this.pageService
      .getPageData("kontakt")
      .subscribe(data => (this.pageData = data));
  }
}
