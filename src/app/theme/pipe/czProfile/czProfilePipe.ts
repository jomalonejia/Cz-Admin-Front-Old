import {Pipe, PipeTransform} from "@angular/core";
import {layoutPaths} from "app/theme/theme.constants";

@Pipe({name:'czProfilePipe'})
export class CzProfilePipe implements PipeTransform{

  transform(input: string, ext='png'): string {
    return layoutPaths.images.profile + input + '.' + ext;
  }

}
