export type DstRef = [string, string];

export type DstRefsByYear =
  | {
      [year: number]: DstRef;
    }
  | false; // Means no DST

export interface DstRefs {
  timezone: string;
  refs: DstRefsByYear;
}

interface DstObject {
  /**
   * Default Dst refs for the country
   */
  defaultDstRef: DstRefs;
}

interface CityDst extends DstObject {}

interface StateDst extends DstObject {
  cities?: {
    /**
     * City name (key)
     * has to be uppercased
     */
    [city: string]: CityDst;
  };
}

export interface CountryDst extends DstObject {
  /**
   * ISO code for country (alpha-3)
   * Cf: https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes
   */
  countryCode: string;

  /**
   * States of the country
   */
  states?: {
    /**
     * State name (key)
     * has to be uppercased
     */
    [state: string]: StateDst;
  };
}
