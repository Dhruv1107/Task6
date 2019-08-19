import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddformComponent } from "./addform/addform.component";
import { BodyComponent } from "./body/body.component";

const routes: Routes = [
  { path: "addform", component: AddformComponent },
  { path: "", component: BodyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [AddformComponent, BodyComponent];
