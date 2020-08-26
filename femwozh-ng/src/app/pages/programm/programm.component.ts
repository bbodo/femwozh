import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/services/page.service';
import { PageData } from 'src/app/interfaces/pageData';

@Component({
  selector: 'app-programm',
  templateUrl: './programm.component.html',
  styleUrls: ['./programm.component.css']
})
export class ProgrammComponent implements OnInit {

  
  pageData: PageData;

  constructor(private pageService: PageService) {}

  ngOnInit() {
    this.pageService
      .getPageData("programm")
      .subscribe(data => (this.pageData = data));
  }

}
