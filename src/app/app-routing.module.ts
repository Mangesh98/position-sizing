import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntradayComponent } from './Intraday/intraday.component';
import { OptionsComponent } from './options/options.component';

const routes: Routes = [
  {path: 'intraday',component:IntradayComponent},
  {path: 'options',component:OptionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const rountingComponents=[IntradayComponent,OptionsComponent]