export interface IIdd {
  root: string;
  suffixes: string[];
}

interface IName {
  common: string;
  official: string;
  nativeName: {
    ara: {
      official: string;
      common: string;
    };
  };
}

interface IFlags {
  png: string;
  svg: string;
}

export interface ICountriesDTO {
  flags: IFlags;
  name: IName;
  cca2: string;
  idd: IIdd;
}
