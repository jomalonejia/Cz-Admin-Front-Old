import {Component} from '@angular/core';
import {CzMenuService} from "app/component/service/czMenu";
import {Routes} from "@angular/router";
import {PAGES_MENU} from "app/view/pages.menu";

@Component({
  selector:'view',
  templateUrl:'./view.component.html',
})

export class ViewComponent{
  constructor(private _menuService: CzMenuService,) {

  }

  ngOnInit() {
    this._menuService.updateMenuByRoutes(<Routes>PAGES_MENU);
  }
}
