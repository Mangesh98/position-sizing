import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { IntradayComponent } from './Intraday/intraday.component';
import { OptionsComponent } from './options/options.component';

const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'equity-size-calculator',component:IntradayComponent},
  {path: 'option-size-calculator',component:OptionsComponent},

  // Last
  {path: '**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const rountingComponents=[IntradayComponent,OptionsComponent]