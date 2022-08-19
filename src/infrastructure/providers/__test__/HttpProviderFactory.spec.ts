import HttpClient from '@infrastructure/providers/HttpClient';
import HttpProviderFactory from '@infrastructure/providers/HttpProviderFactory';

jest.mock('@infrastructure/providers/HttpClient');

const makeSut = () => {
  const sut = new HttpProviderFactory();
  return {
    sut,
  };
};

describe('HttpProviderFactory', () => {
  it('should instance HttpClient successfully', () => {
    const { sut } = makeSut();

    const params = {
      baseURL: 'http://some-base-url.com',
      timeout: 3000,
      headers: {
        Authorization: 'Bearer XYZ',
      },
    };

    const result = sut.build(params.baseURL, params.headers, params.timeout);

    expect(result).toBeInstanceOf(HttpClient);
  });
});
