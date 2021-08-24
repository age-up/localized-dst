import { CountryDst, DstRefs, DstRefsByYear } from './models';

export type FranceDstLocation = 'FRA' | 'FRA.METROPOLE' | 'FRA.METROPOLE.PARIS';

const refs: DstRefsByYear = {
  2018: ['2018-03-11 02:00:00', '2018-11-04 01:00:00'],
  2019: ['2019-03-10 02:00:00', '2019-11-03 01:00:00'],
  2020: ['2020-03-08 02:00:00', '2020-11-01 01:00:00'],
  2021: ['2021-03-14 02:00:00', '2021-11-07 01:00:00'],
  2022: ['2022-03-13 02:00:00', '2022-11-06 01:00:00'], //
  2023: ['2023-03-13 02:00:00', '2023-11-06 01:00:00'],
  2024: ['2024-03-13 02:00:00', '2024-11-06 01:00:00'],
  2025: ['2025-03-13 02:00:00', '2025-11-06 01:00:00'],
  2026: ['2026-03-13 02:00:00', '2026-11-06 01:00:00'],
  2027: ['2027-03-13 02:00:00', '2027-11-06 01:00:00'],
  2028: ['2028-03-13 02:00:00', '2028-11-06 01:00:00'],
  2029: ['2029-03-13 02:00:00', '2029-11-06 01:00:00'],
  2030: ['2030-03-13 02:00:00', '2030-11-06 01:00:00']
};

const DEFAULT_AS_PARIS: DstRefs = {
  timezone: 'America/New_York',
  refs
};

const country: CountryDst = {
  countryCode: 'CAN',
  defaultDstRef: DEFAULT_AS_PARIS,
  states: {
    METROPOLE: {
      defaultDstRef: DEFAULT_AS_PARIS,
      cities: {
        PARIS: {
          defaultDstRef: DEFAULT_AS_PARIS
        }
      }
    }
  }
};

export default country;
