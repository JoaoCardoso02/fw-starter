import type Country from '@domain/countries/entities/Country';
import type { ICountriesService } from '@domain/countries/types/ICountriesService';

import type { BaseHandler } from './types/BaseHandler';

export default class GetCountriesPhonePrefixHandler implements BaseHandler<Country[]> {
  private countryService: ICountriesService;

  constructor(countryService: ICountriesService) {
    this.countryService = countryService;
  }

  async execute() {
    try {
      return await this.countryService.getCountriesPhonePrefix();
    } catch (error) {
      throw new Error('Failed to get countries phone prefix');
    }
  }
}
