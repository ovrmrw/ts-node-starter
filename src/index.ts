import * as lodash from 'lodash';

export function range(start: number, length: number): number[] {
  return lodash.range(start, start + length);
}
