import CountriesRepository from '@domain/countries/infrastructure/CountriesRepository';

const makeHttpClient = () => {
  const HttpClientStub = jest.fn().mockImplementation(() => ({
    get: jest.fn().mockResolvedValue({
      data: JSON.stringify([
        {
          name: 'Brazil 🇧🇷',
        },
      ]),
    }),
  }));

  return new HttpClientStub();
};

const makeSut = () => {
  const httpClient = makeHttpClient();
  const sut = new CountriesRepository(httpClient);
  return {
    sut,
    httpClient,
  };
};

describe('CountriesRepository', () => {
  it('should create an CountriesRepository instance successfully', () => {
    const { sut } = makeSut();

    expect(sut).toBeInstanceOf(CountriesRepository);
  });

  describe('GetCountries', () => {
    it('should return an empty array if does not exist any countries', async () => {
      const { sut, httpClient } = makeSut();

      jest.spyOn(httpClient, 'get').mockResolvedValueOnce({ data: JSON.stringify([]) });

      const result = await sut.getCountries();

      expect(result).toEqual([]);
    });

    it('should return a list of countries', async () => {
      const { sut, httpClient } = makeSut();

      const getSpy = jest.spyOn(httpClient, 'get');

      const result = await sut.getCountries();

      expect(getSpy).toBeCalledWith('all?fields=idd,flags,name');
      expect(result).toEqual([
        {
          name: 'Brazil 🇧🇷',
        },
      ]);
    });

    it('should throw if get method fails', async () => {
      const { sut, httpClient } = makeSut();

      const getSpy = jest.spyOn(httpClient, 'get').mockRejectedValue(new Error('some error'));

      sut.getCountries();

      await expect(getSpy).rejects.toThrow();
    });
  });
});
