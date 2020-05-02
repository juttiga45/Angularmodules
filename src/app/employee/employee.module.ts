import { NgModule } from "@angular/core";
import { CreateComponent } from "../employee/create.component";
import { ListComponent } from "../employee/list.component";
import { EmployeeRoutingModule } from "../employee/employee-routing.module.";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [CreateComponent, ListComponent],
  imports: [EmployeeRoutingModule, SharedModule]
})
export class EmployeeModule {}
