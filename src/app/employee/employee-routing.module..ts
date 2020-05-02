import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListComponent } from "./list.component";

import { CreateComponent } from "./create.component";

const routes: Routes = [
  {
    path: "employees",
    children: [
      { path: "list", component: ListComponent },
      { path: "create", component: CreateComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule {}
