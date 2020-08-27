import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-infinite-loop',
  templateUrl: './infinite-loop.component.html',
  styleUrls: ['./infinite-loop.component.css']
})
export class InfiniteLoopComponent implements AfterViewInit {

  @ViewChild('outerLoop') loop: { nativeElement: any; };
  constructor() { }

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
