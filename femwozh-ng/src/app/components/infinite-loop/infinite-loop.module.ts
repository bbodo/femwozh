import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteLoopComponent } from './infinite-loop.component'


@NgModule({
  declarations: [
    InfiniteLoopComponent
  ],
  exports: [
    InfiniteLoopComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InfiniteLoopModule { }
