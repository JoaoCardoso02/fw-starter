import type { ICountriesService } from '@domain/countries/types/ICountriesService';
import GetCountriesPhonePrefixHandler from '@handlers/GetCountriesPhonePrefixHandler';

const makeCountryService = () => {
  const CountryServiceStub = {
    getCountriesPhonePrefix: jest.fn().mockResolvedValue([
      {
        name: 'Brazil',
        flag: 'brazil.svg',
        idd: '+55',
        cca2: 'BR',
      },
    ]),
  } as unknown as ICountriesService;
  return CountryServiceStub;
};

const makeSut = () => {
  const countryServiceStub = makeCountryService();
  const sut = new GetCountriesPhonePrefixHandler(countryServiceStub);
  return {
    sut,
    countryServiceStub,
  };
};

describe('GetCountriesPhonePrefixHandler', () => {
  it('should get countries phone prefix successfully', async () => {
    const { sut, countryServiceStub } = makeSut();

    const getCountriesPhonePrefixSpy = jest.spyOn(countryServiceStub, 'getCountriesPhonePrefix');

    const result = await sut.execute();

    expect(getCountriesPhonePrefixSpy).toBeCalled();
    expect(result).toEqual([
      {
        name: 'Brazil',
        flag: 'brazil.svg',
        idd: '+55',
        cca2: 'BR',
      },
    ]);
  });

  it('should throw error if getCountriesPhonePrefix method fails', async () => {
    const { sut, countryServiceStub } = makeSut();

    jest.spyOn(countryServiceStub, 'getCountriesPhonePrefix').mockImplementationOnce(() => {
      throw new Error('some error');
    });

    const result = sut.execute();

    await expect(result).rejects.toThrowError('Failed to get countries phone prefix');
  });
});
