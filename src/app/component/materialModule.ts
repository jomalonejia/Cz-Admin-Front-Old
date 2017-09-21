import {NgModule} from "@angular/core";
import {MdCheckboxModule, MdDialogModule, MdInputModule} from "@angular/material";


@NgModule({
  exports:[
    MdDialogModule,
    MdInputModule,
    MdCheckboxModule,
  ]
})

export class MaterialModule{

}
