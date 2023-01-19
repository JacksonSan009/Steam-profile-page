import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'Main', component: MainComponent },
      { path: '', redirectTo: '/Main', pathMatch: 'full' },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
