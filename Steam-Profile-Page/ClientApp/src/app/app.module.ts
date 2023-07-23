import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';

import { SearchBarComponent } from './components/search-bar/search-bar.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, SearchBarComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
    ]),
  ],
  providers: [{ provide: 'BASE_URL', useFactory: getBaseUrl }],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href;
}
