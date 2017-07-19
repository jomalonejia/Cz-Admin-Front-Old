import {Component, Input, Output, EventEmitter} from "@angular/core";
@Component({
  selector:"cz-menu-item",
  templateUrl:'./czMenuItem.html',
  styleUrls:['./czMenuItem.scss']
})
export class CzMenuItem{
  @Input() menuItem:any;
  @Input() child:boolean = false;

  @Output() itemHover = new EventEmitter<any>();
  @Output() toggleSubMenu = new EventEmitter<any>();

  public onHoverItem($event):void {
    this.itemHover.emit($event);
  }

  public onToggleSubMenu($event, item):boolean {
    $event.item = item;
    this.toggleSubMenu.emit($event);
    return false;
  }
}
