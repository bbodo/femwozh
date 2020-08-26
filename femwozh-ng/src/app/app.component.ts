import { Component, ViewChild, ViewChildren, AfterViewInit, QueryList, ElementRef } from '@angular/core';
import { PageService } from './services/page.service';
import { PageData } from './interfaces/pageData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit{
  
  @ViewChild('outerLoop') loop: { nativeElement: any; };
  pages: PageData;
  title = 'FEMWO!';

  constructor(private pageService: PageService) {
    this.pages = this.pageService.getPages();
  }

  ngAfterViewInit(): void {
    let outer = this.loop.nativeElement;
    console.log(this.loop)
    let content = outer.querySelector('.infinite-loop--content');
    repeatContent(content, outer.offsetWidth);

    let el = outer.querySelector('.infinite-loop');
    el.innerHTML = el.innerHTML + el.innerHTML;

  function repeatContent(el, till) {
      let html = el.innerHTML;
      let counter = 0;
      while (el.offsetWidth < till && counter < 100) {
          el.innerHTML += html;
          console.log(el.offsetWidth, till);
          counter += 1;
      }
  }
  }
}


