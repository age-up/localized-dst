import { getYear, isAfter, isBefore } from 'date-fns';
import * as moment from 'moment-timezone';

import { CountryDst, DstRefs } from './dst/models';

import CanadaDst, { CanadaDstLocation } from './dst/canada-dst';
import FranceDst, { FranceDstLocation } from './dst/france-dst';
import UsaDst, { UsaDstLocation } from './dst/usa-dst';

interface Options {
  location: CanadaDstLocation | FranceDstLocation | UsaDstLocation;
  failIfNotExisting?: boolean;
}

const getCountryDstRef = (country: string): CountryDst => {
  switch (country) {
    case 'CAN':
      return CanadaDst;
    case 'FRA':
      return FranceDst;
    case 'USA':
      return UsaDst;
    default:
      null;
  }
};

export const getDstRef = (
  location: Options['location'],
  failIfNotExisting = false
): DstRefs => {
  const [country, state, city] = location.split('.');
  const countryRef = getCountryDstRef(country);

  if (!countryRef || (countryRef && !countryRef.defaultDstRef)) {
    const message = `Refs don't exist for this ISO country code (${country})`;
    if (failIfNotExisting) {
      throw new Error(message);
    } else {
      console.warn(message);
      return null;
    }
  }

  if (!state) {
    return countryRef.defaultDstRef;
  }

  if ((state && !countryRef.states) || (state && !countryRef.states[state])) {
    const message = `State (${state}) doesn't exist for this ISO country code (${country})`;
    if (failIfNotExisting) {
      throw new Error(message);
    } else {
      console.warn(message);
      return null;
    }
  }

  if (!city) {
    return countryRef.states[state].defaultDstRef;
  }

  if (
    (city && !countryRef.states[state].cities) ||
    (city && !countryRef.states[state].cities[city])
  ) {
    const message = `City (${city}) doesn't exist for "${country}/${state}"`;
    if (failIfNotExisting) {
      throw new Error(message);
    } else {
      console.warn(message);
      return null;
    }
  }

  return countryRef.states[state].cities[city].defaultDstRef;
};

export const isDst = (date: Date, options: Options): Boolean => {
  const refs = getDstRef(options.location, options.failIfNotExisting);

  const currentYear = getYear(date);

  const { refs: dates, timezone } = refs;

  if (!dates[currentYear] || !currentYear) {
    const message = `DST doesn't exist for this year (${currentYear})`;
    if (options.failIfNotExisting) {
      throw new Error(message);
    } else {
      console.warn(message);
      return false;
    }
  }

  return (
    isAfter(date, moment.tz(dates[currentYear][0], timezone).toDate()) &&
    isBefore(date, moment.tz(dates[currentYear][1], timezone).toDate())
  );
};
