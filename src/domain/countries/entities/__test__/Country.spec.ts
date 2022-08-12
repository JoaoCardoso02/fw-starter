import Country from '@domain/countries/entities/Country';

describe('Country', () => {
  it('should create a Country instance successfully', () => {
    const sut = new Country({
      flag: 'fake flag',
      idd: 'fake idd',
      cca2: 'fake cca2',
      name: 'fake name',
    });

    expect(sut).toBeInstanceOf(Country);
  });

  it('should get the flag and this must be the same as the one passed in the instance', () => {
    const sut = new Country({
      flag: 'fake flag',
      idd: 'fake idd',
      cca2: 'fake cca2',
      name: 'fake name',
    });

    expect(sut.getFlag()).toBe('fake flag');
  });

  it('should get the idd and this must be the same as the one passed in the instance', () => {
    const sut = new Country({
      flag: 'fake flag',
      idd: 'fake idd',
      cca2: 'fake cca2',
      name: 'fake name',
    });

    expect(sut.getIdd()).toBe('fake idd');
  });

  it('should get the cca2 and this must be the same as the one passed in the instance', () => {
    const sut = new Country({
      flag: 'fake flag',
      idd: 'fake idd',
      cca2: 'fake cca2',
      name: 'fake name',
    });

    expect(sut.getCca2()).toBe('fake cca2');
  });

  it('should get the name and this must be the same as the one passed in the instance', () => {
    const sut = new Country({
      flag: 'fake flag',
      idd: 'fake idd',
      cca2: 'fake cca2',
      name: 'fake name',
    });

    expect(sut.getName()).toBe('fake name');
  });
});
