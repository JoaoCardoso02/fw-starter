import CountriesService from '@domain/countries/services/CountriesService';
import CountryPhonePrefixTransformer from '@domain/countries/transformers/CountryPhonePrefixTransformer';

const makeExampleRepositoryStub = () => {
  const ExampleRepositoryStub = {
    getCountries: jest.fn().mockReturnValue([
      {
        flags: {
          png: 'brazil.png',
          svg: 'brazil.svg',
        },
        name: {
          common: 'Brazil',
          official: 'Federative Republic of Brazil',
          nativeName: {
            por: {
              official: 'República Federativa do Brasil',
              common: 'Brasil',
            },
          },
        },
        cca2: 'BR',
        idd: {
          root: '+5',
          suffixes: ['5'],
        },
      },
    ]),
  };

  return ExampleRepositoryStub;
};

const makeSut = () => {
  const countryRepositoryStub = makeExampleRepositoryStub();
  const countryPhonePrefixTransformerStub = new CountryPhonePrefixTransformer();
  const sut = new CountriesService(countryRepositoryStub, countryPhonePrefixTransformerStub);

  return {
    sut,
    countryRepositoryStub,
    countryPhonePrefixTransformerStub,
  };
};

describe('CountriesService', () => {
  it('should create an CountriesService instance successfully', () => {
    const { sut } = makeSut();

    expect(sut).toBeInstanceOf(CountriesService);
  });

  describe('GetCountriesPhonePrefix', () => {
    it('should get all countries phone prefix successfully', async () => {
      const { sut } = makeSut();

      const result = await sut.getCountriesPhonePrefix();

      expect(result).toEqual([
        {
          name: 'Brazil',
          flag: 'brazil.svg',
          idd: '+55',
          cca2: 'BR',
        },
      ]);
    });

    it('should throw if getCountries fails', async () => {
      const { sut, countryRepositoryStub } = makeSut();

      jest.spyOn(countryRepositoryStub, 'getCountries').mockImplementation(() => {
        throw new Error('some error');
      });

      const result = sut.getCountriesPhonePrefix();

      await expect(result).rejects.toThrow();
    });

    it('should throw if getCountries fails', async () => {
      const { sut, countryPhonePrefixTransformerStub } = makeSut();

      jest.spyOn(countryPhonePrefixTransformerStub, 'execute').mockImplementation(() => {
        throw new Error('some error');
      });

      const result = sut.getCountriesPhonePrefix();

      await expect(result).rejects.toThrow();
    });
  });
});
