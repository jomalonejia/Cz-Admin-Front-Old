import {Component, ElementRef, HostListener} from "@angular/core";
import {GlobalState} from "app/component/global.state";
import {layoutSizes} from "app/component/theme.constants";
import {Store} from "@ngrx/store";

import * as $ from 'jquery';
import * as reducers from '../../reducers';
import {Observable} from "rxjs/Observable";
import * as layoutAction from '../../actions/layout';


@Component({
  selector:"cz-sidebar",
  templateUrl:'./czSidebar.html',
  styleUrls:['./czSidebar.scss']
})
export class CzSidebar{
  public menuHeight:number;
  public isMenuCollapsed$:Observable<boolean>;
  public isMenuCollapsed:boolean;
  public isMenuShouldCollapsed:boolean = false;

  constructor(private _elementRef:ElementRef,private store:Store<reducers.State>) {
    this.isMenuCollapsed$ = this.store.select(reducers.getIsCollapsed);
    this.isMenuCollapsed$.subscribe(v => {
      this.isMenuCollapsed = v;
    })
  }

  /*public ngOnInit():void {
    if (this._shouldMenuCollapse()) {
      this.menuCollapse();
    }
  }*/

  public ngAfterViewInit():void {
    setTimeout(() => this.updateSidebarHeight());
  }

  @HostListener('window:resize')
  public onWindowResize():void {

    var isMenuShouldCollapsed = this._shouldMenuCollapse();

    if (this.isMenuShouldCollapsed !== isMenuShouldCollapsed) {
      this.menuCollapseStateChange(isMenuShouldCollapsed);
    }
    this.isMenuShouldCollapsed = isMenuShouldCollapsed;
    this.updateSidebarHeight();
  }

  public menuExpand():void {
    this.menuCollapseStateChange(false);
  }

  public menuCollapse():void {
    this.menuCollapseStateChange(true);
  }

  public menuCollapseStateChange(isCollapsed:boolean):void {
    this.store.dispatch(new layoutAction.ToggleMenuAction);
  }

  public updateSidebarHeight():void {
    this.menuHeight = this._elementRef.nativeElement.childNodes[0].clientHeight - 84;
  }

  private _shouldMenuCollapse():boolean {
    return window.innerWidth <= layoutSizes.resWidthCollapseSidebar;
  }
}
