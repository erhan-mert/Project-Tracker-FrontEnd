import { Pipe, PipeTransform } from '@angular/core';
import {Project} from "../models/project";

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Project[], searchKey: string): Project[] {
    return searchKey != undefined ? value.filter(v => v.name.toLowerCase().includes(searchKey.toLowerCase())) : value;
  }
}
