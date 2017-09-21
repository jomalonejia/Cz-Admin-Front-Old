import {NgModule}   from '@angular/core';
import {FormsModule, } from '@angular/forms';
import {CommonModule} from "@angular/common";
import {FileUploadModule} from "ng2-file-upload";
import { DataTableModule } from "angular2-datatable";
import { QuillEditorModule } from 'ngx-quill-editor';
import {
  MdDialogModule,
  MdInputModule,
  MdButtonModule,
  MdExpansionModule,
  MdChipsModule,
  MdCardModule
}
from '@angular/material';

import {ThemeModule} from "app/component/themeModule";
import {routing} from "./item.routing";
import {DataFilterPipe} from './data-filter.pipe'

import {ItemComponent} from './item.component';
import {ItemAddComponent} from "./component/add";
import {ItemListComponent} from "./component/list";
import {
  ItemEditComponent,
  ItemEditImageComponent,
  ItemEditContentComponent
}
  from "./component/list/component";

import {ItemService} from "./item.service";


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    QuillEditorModule,
    FileUploadModule,
    DataTableModule,
    MdDialogModule,
    MdInputModule,
    MdButtonModule,
    MdExpansionModule,
    MdChipsModule,
    MdCardModule,
    ThemeModule,
    routing
  ],
  declarations: [
    ItemComponent,
    ItemAddComponent,
    ItemListComponent,
    ItemEditComponent,
    ItemEditImageComponent,
    ItemEditContentComponent,
    DataFilterPipe,
  ],
  entryComponents:[
    ItemEditComponent,
    ItemEditImageComponent,
    ItemEditContentComponent
  ],
  providers:[
    ItemService
  ]
})

export class ItemModule {

}
