import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent, pathMatch: "full" },
      { path: "**", component: HomeComponent },
    ]),
  ],
  providers: [
    { provide: "BASE_URL", useFactory: getBaseUrl },
    provideHttpClient(withInterceptorsFromDi()),
  ],
})
export class AppModule { }

export function getBaseUrl() {
  return document.getElementsByTagName("base")[0].href;
}
