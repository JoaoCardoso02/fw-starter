import HttpClient from '@infrastructure/providers/HttpClient';
import type { IHttpClientParams } from '@infrastructure/providers/types/IHttpClient';
import { Axios } from 'axios';

const makeSut = (data: IHttpClientParams) => {
  const sut = new HttpClient(data);
  return {
    sut,
  };
};

describe('HttpClient', () => {
  it('should instance HttpClient successfully', () => {
    const { sut } = makeSut({
      baseURL: 'http://some-base-url.com',
      timeout: 3000,
      headers: {
        Authorization: 'Bearer XYZ',
      },
    });

    expect(sut).toBeInstanceOf(Axios);
  });
});
