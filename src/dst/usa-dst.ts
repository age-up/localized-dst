import { CountryDst, DstRefs, DstRefsByYear } from './models';

export type UsaDstLocation = 'USA' | 'USA.HAWAII';

// No DST
const DEFAULT: DstRefsByYear = false;

const DEFAULT_DST: DstRefs = {
  timezone: 'America/New_York',
  refs: DEFAULT
};

const country: CountryDst = {
  countryCode: 'USA',
  defaultDstRef: DEFAULT_DST,
  states: {
    HAWAII: {
      defaultDstRef: {
        timezone: 'America/Hawaii',
        refs: false
      }
    }
  }
};

export default country;
