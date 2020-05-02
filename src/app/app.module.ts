import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home.component";
import { PageNotFoundComponent } from "./components/page-not-found.component";
import { StudentComponent } from './student/student.component';
import { ParentComponent } from './parent/parent.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, PageNotFoundComponent, StudentComponent, ParentComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
