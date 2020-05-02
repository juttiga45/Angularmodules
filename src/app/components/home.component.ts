import { Component, OnInit } from "@angular/core";
import {
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
  ComponentFactory
} from "@angular/core";
import { StudentComponent } from "../student/student.component";
import { ParentComponent } from "../parent/parent.component";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  componentRef: any;
  @ViewChild("loadComponent", { read: ViewContainerRef })
  entry: ViewContainerRef;
  constructor(private resolver: ComponentFactoryResolver) {}
  createComponent(Id: number) {
    this.entry.clear();
    if (Id == 1) {
      const factory = this.resolver.resolveComponentFactory(StudentComponent);
      this.componentRef = this.entry.createComponent(factory);
    } else if (Id == 2) {
      const factory = this.resolver.resolveComponentFactory(ParentComponent);
      this.componentRef = this.entry.createComponent(factory);
    }
    this.componentRef.instance.message = "Called by appComponent";
  }
  destroyComponent() {
    this.componentRef.destroy();
  }
  data = [
    {
      Id: 1,
      Name: "Student Info"
    },
    {
      Id: 2,
      Name: "Parent Info"
    }
  ];
  selectName(id: number) {
    this.createComponent(id);
  }

  ngOnInit(): void {}
}
