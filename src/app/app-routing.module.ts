import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home.component";
import { PageNotFoundComponent } from "./components/page-not-found.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  {
    path: "emloyees",
    loadChildren: "./employee/employee.module#EmployeeModule"
  },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
