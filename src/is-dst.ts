import getYear from 'date-fns/getYear';
import isAfter from 'date-fns/isAfter';
import isBefore from 'date-fns/isBefore';
import * as moment from 'moment-timezone';

import { CanadaDstLocation } from './dst/canada-dst';
import { FranceDstLocation } from './dst/france-dst';

interface Options {
  location: CanadaDstLocation | FranceDstLocation;
  //   failIfNotExisting: Boolran
}

// const refs: any = {
//     2018: ['2018-03-11 02:00:00', '2018-11-04 01:00:00'],
//     2019: ['2019-03-10 02:00:00', '2019-11-03 01:00:00'],
//     2020: ['2020-03-08 02:00:00', '2020-11-01 01:00:00'],
//     2021: ['2021-03-14 02:00:00', '2021-11-07 01:00:00'],
//     2022: ['2022-03-13 02:00:00', '2022-11-06 01:00:00']
//   };

// const DST_REFS = {
//     Canada: {
//         default:
//         Quebec: {

//         }
//     }
// }

export const isDST = (date: Date, options: Options): Boolean => {
  const refs: any = {
    2018: ['2018-03-11 02:00:00', '2018-11-04 01:00:00'],
    2019: ['2019-03-10 02:00:00', '2019-11-03 01:00:00'],
    2020: ['2020-03-08 02:00:00', '2020-11-01 01:00:00'],
    2021: ['2021-03-14 02:00:00', '2021-11-07 01:00:00'],
    2022: ['2022-03-13 02:00:00', '2022-11-06 01:00:00']
  };

  const currentYear = getYear(date);

  if (!refs[currentYear]) {
    console.warn(`DST doesn't exist for this year (${currentYear})`);
    return false;
  }

  return (
    isAfter(
      date,
      moment.tz(refs[currentYear][0], 'America/New_York').toDate()
    ) &&
    isBefore(date, moment.tz(refs[currentYear][1], 'America/New_York').toDate())
  );
};
