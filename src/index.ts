import * as lodash from 'lodash';

export function customRange(start: number, length: number): number[] {
  return lodash.range(start, start + length);
}

console.log(customRange(1, 10));
