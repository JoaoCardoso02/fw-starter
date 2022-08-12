import type { ICountry } from '../types/ICountry';

export default class Country {
  private name: string;
  private flag: string;
  private idd: string;
  private cca2: string;

  constructor(country: ICountry) {
    this.name = country.name;
    this.flag = country.flag;
    this.idd = country.idd;
    this.cca2 = country.cca2;
  }

  public getName() {
    return this.name;
  }

  public setName(name: string) {
    if (name) throw new Error('Name is undefined');

    this.name = name;
  }
  public getFlag() {
    return this.flag;
  }

  public setFlag(flag: string) {
    if (flag) throw new Error('Flag is undefined');

    this.flag = flag;
  }
  public getIdd() {
    return this.idd;
  }

  public setIdd(idd: string) {
    if (idd) throw new Error('Idd is undefined');

    this.idd = idd;
  }
  public getCca2() {
    return this.cca2;
  }

  public setCca2(cca2: string) {
    if (cca2) throw new Error('Cca2 is undefined');

    this.cca2 = cca2;
  }
}
