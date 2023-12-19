import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailComponentComponent } from './detail-component/detail-component.component';

const routes: Routes = [
  {
    path: "",
    component: AppComponent
  },
  {
    path:"detail",
    component: DetailComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
