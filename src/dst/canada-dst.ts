import { CountryDst, DstRefs, DstRefsByYear } from './models';

export type CanadaDstLocation =
  | 'CAN'
  | 'CAN.QUEBEC'
  | 'CAN.QUEBEC.MONTREAL'
  | 'CAN.ONTARIO'
  | 'CAN.ONTARIO.TORONTO';

const QUEBEC_ONTARIO: DstRefsByYear = {
  1980: ['2000-04-27 02:00:00', '2000-10-26 02:00:00'],
  1981: ['2000-04-26 02:00:00', '2000-10-25 02:00:00'],
  1982: ['2000-04-25 02:00:00', '2000-10-31 02:00:00'],
  1983: ['2000-04-24 02:00:00', '2000-10-30 02:00:00'],
  1984: ['2000-04-29 02:00:00', '2000-10-28 02:00:00'],
  1985: ['2000-04-28 02:00:00', '2000-10-27 02:00:00'],
  1986: ['2000-04-27 02:00:00', '2000-10-26 02:00:00'],
  1987: ['2000-04-05 02:00:00', '2000-10-25 02:00:00'],
  1988: ['2000-04-03 02:00:00', '2000-10-30 02:00:00'],
  1989: ['2000-04-02 02:00:00', '2000-10-29 02:00:00'],
  1990: ['2000-04-01 02:00:00', '2000-10-25 02:00:00'],
  1991: ['2000-04-07 02:00:00', '2000-10-27 02:00:00'],
  1992: ['2000-04-05 02:00:00', '2000-10-25 02:00:00'],
  1993: ['2000-04-04 02:00:00', '2000-10-31 02:00:00'],
  1994: ['2000-04-03 02:00:00', '2000-10-30 02:00:00'],
  1995: ['2000-04-02 02:00:00', '2000-10-29 02:00:00'],
  1996: ['2000-04-07 02:00:00', '2000-10-27 02:00:00'],
  1997: ['2000-04-06 02:00:00', '2000-10-26 02:00:00'],
  1998: ['2000-04-05 02:00:00', '2000-10-25 02:00:00'],
  1999: ['2000-04-04 02:00:00', '2000-10-31 02:00:00'],
  2000: ['2000-04-02 02:00:00', '2000-10-29 02:00:00'],
  2001: ['2001-04-01 02:00:00', '2001-10-28 02:00:00'],
  2002: ['2002-04-07 02:00:00', '2002-10-27 02:00:00'],
  2003: ['2003-04-06 02:00:00', '2003-10-26 02:00:00'],
  2004: ['2004-04-04 02:00:00', '2004-10-31 02:00:00'],
  2005: ['2005-04-03 02:00:00', '2005-10-30 02:00:00'],
  2006: ['2006-04-02 02:00:00', '2006-10-29 02:00:00'],
  2007: ['2007-03-11 02:00:00', '2007-11-04 02:00:00'],
  2008: ['2008-03-09 02:00:00', '2008-11-02 02:00:00'],
  2009: ['2009-03-08 02:00:00', '2009-11-01 02:00:00'],
  2010: ['2010-03-14 02:00:00', '2010-11-07 02:00:00'],
  2011: ['2011-03-13 02:00:00', '2011-11-06 02:00:00'],
  2012: ['2012-03-11 02:00:00', '2012-11-04 02:00:00'],
  2013: ['2013-03-10 02:00:00', '2013-11-03 02:00:00'],
  2014: ['2014-03-09 02:00:00', '2014-11-02 02:00:00'],
  2015: ['2015-03-08 02:00:00', '2015-11-01 02:00:00'],
  2016: ['2016-03-13 02:00:00', '2016-11-06 02:00:00'],
  2017: ['2017-03-12 02:00:00', '2017-11-05 02:00:00'],
  2018: ['2018-03-11 02:00:00', '2018-11-04 02:00:00'],
  2019: ['2019-03-10 02:00:00', '2019-11-03 02:00:00'],
  2020: ['2020-03-08 02:00:00', '2020-11-01 02:00:00'],
  2021: ['2021-03-14 02:00:00', '2021-11-07 02:00:00'],
  2022: ['2022-03-13 02:00:00', '2022-11-06 02:00:00'],
  2023: ['2023-03-12 02:00:00', '2023-11-05 02:00:00'],
  2024: ['2024-03-10 02:00:00', '2024-11-03 02:00:00'],
  2025: ['2025-03-09 02:00:00', '2025-11-02 02:00:00'],
  2026: ['2026-03-08 02:00:00', '2026-11-01 02:00:00'],
  2027: ['2027-03-14 02:00:00', '2027-11-07 02:00:00'],
  2028: ['2028-03-12 02:00:00', '2028-11-05 02:00:00'],
  2029: ['2029-03-11 02:00:00', '2029-11-04 02:00:00'],
  2030: ['2030-03-10 02:00:00', '2030-11-03 02:00:00']
};

const DEFAULT_AS_MONTREAL: DstRefs = {
  timezone: 'America/New_York',
  refs: QUEBEC_ONTARIO
};

const country: CountryDst = {
  countryCode: 'CAN',
  defaultDstRef: DEFAULT_AS_MONTREAL,
  states: {
    QUEBEC: {
      defaultDstRef: DEFAULT_AS_MONTREAL,
      cities: {
        MONTREAL: {
          defaultDstRef: DEFAULT_AS_MONTREAL
        }
      }
    },
    TORONTO: {
      defaultDstRef: {
        timezone: 'America/Toronto',
        refs: QUEBEC_ONTARIO
      },
      cities: {
        MONTREAL: {
          defaultDstRef: {
            timezone: 'America/Toronto',
            refs: QUEBEC_ONTARIO
          }
        }
      }
    }
  }
};

export default country;
