
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "./shopping-list.component";
import { SharedModule } from "../shared/shared.module";


@NgModule({
    declarations:[
        ShoppingEditComponent,
        ShoppingListComponent
    ],

    imports: [
        FormsModule,
        RouterModule.forChild([
            { path: '', component: ShoppingListComponent}
        ]),
        SharedModule
    ],
  
})
export class ShoppingListModule{

}