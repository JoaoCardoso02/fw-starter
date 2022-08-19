import type { ICountriesDTO, IIdd } from '@domain/countries/dto/ICountriesDTO';
import type { ICountry } from '@domain/countries/types/ICountry';
import type { ICountryPhonePrefixTransformer } from '@domain/countries/types/ICountryPhonePrefixTransformer';

export default class CountryPhonePrefixTransformer implements ICountryPhonePrefixTransformer {
  public execute(country: ICountriesDTO): ICountry {
    const name = country.name.common;
    const flag = country.flags.svg;
    const idd = this.getIdd(country.idd);

    return {
      name,
      flag,
      idd,
      cca2: country.cca2,
    };
  }

  private getIdd(idd: IIdd) {
    const suffix = idd.suffixes.length === 1 ? idd.suffixes[0] : '';

    return idd.root + suffix;
  }
}
