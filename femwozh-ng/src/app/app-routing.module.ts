import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { KontaktComponent } from './pages/kontakt/kontakt.component';
import { ProgrammComponent } from './pages/programm/programm.component';
import { AboutComponent } from './pages/about/about.component';
import { MitmachenComponent } from './pages/mitmachen/mitmachen.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent},
  { path: "kontakt", component: KontaktComponent },
  { path: "programm", component: ProgrammComponent },
  { path: "mitmachen", component: MitmachenComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
