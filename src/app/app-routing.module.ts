import { Routes } from "@angular/router";
import { AddComponent } from "./add/add.component";
import { EditComponent } from "./edit/edit.component";

export const routes:Routes = [
  {path:'edit',component:EditComponent},
  {path:'add',component:AddComponent}
]