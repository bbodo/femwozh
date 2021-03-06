import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MitmachenComponent } from './pages/mitmachen/mitmachen.component';
import { KontaktComponent } from './pages/kontakt/kontakt.component';
import { ProgrammComponent } from './pages/programm/programm.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './pages/about/about.component';
import { InfiniteLoopModule } from './components/infinite-loop/infinite-loop.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MitmachenComponent,
    KontaktComponent,
    ProgrammComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteLoopModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
