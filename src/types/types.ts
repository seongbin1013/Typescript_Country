export interface Country {
  altSpellings: string[];
  area: number;
  capital: string[];
  capitalInfo: {
    lating: number[];
  };
  car: {
    side: string;
    signs: string[];
  };
  cca2: string;
  cca3: string;
  ccn3: string;
  cioc: string;
  coatOfArms: {
    png: string;
    svg: string;
  };
  continents: string[];
  currencies: {
    ISK: { name: string; symbol: string };
  };
  demonyms: {
    [key: string]: {
      f: string;
      m: string;
    };
  };
  fifa: string;
  flag: string;
  flags: {
    [key: string]: string;
  };
  gini: {
    [key: number]: number;
  };
  idd: {
    root: string;
    suffixes: string[];
  };
  independent: boolean;
  landlocked: boolean;
  languages: {
    isl: string;
  };
  latlng: number[];
  maps: {
    [key: string]: string;
  };
  name: {
    common: string;
    official: string;
    nativeName: {
      isl: {
        common: string;
        official: string;
      };
    };
  };
  population: number;
  postalCode: {
    [key: string]: string;
    // ??
  };
  region: string;
  startOfWeek: string;
  status: string;
  subregion: string;
  timezones: string[];
  tld: string[];
  translations: {
    [key: string]: {
      official: string;
      common: string;
    };
  };
  unMember: boolean;
}

export interface CountryWithLike extends Country {
  isLiked: boolean;
}
