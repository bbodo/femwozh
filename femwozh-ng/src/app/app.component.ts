import { Component } from '@angular/core';
import { PageService } from './services/page.service';
import { PageData } from './interfaces/pageData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pages: PageData;
  title = 'FEMWO!';

  constructor(private pageService: PageService) {
    this.pages = this.pageService.getPages();
  }
}


