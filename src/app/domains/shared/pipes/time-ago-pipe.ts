import { StringToken } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

import {formatDistance} from 'date-fns'

@Pipe({
  name: 'timeAgo',
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: string): string {

    const date = new Date(value)

    const hoy = new Date()


    return formatDistance(hoy,date);
  }

}

