import type Country from '@domain/countries/entities/Country';
import { test, expect } from '@playwright/test';

import GetCountriesPhonePrefixResolver from '../src/resolvers/GetCountriesPhonePrefixResolver';

let countries: Country[];

test.beforeEach(async ({ page }) => {
  await page.goto('https://phone-prefix-challenge-by-joao.webflow.io/');
  countries = await GetCountriesPhonePrefixResolver().execute();
  await page.waitForSelector('.prefix-dropdown-test_list .prefix-dropdown_item-2');
});

test.describe('PhonePrefixDropdown', () => {
  test('should render country titles in dropdown item', async ({ page }) => {
    const items = await page
      .locator('.prefix-dropdown-test_list .prefix-dropdown_item-2')
      .elementHandles();

    const titles = countries.map((country) => country.getName());

    for await (const item of items) {
      const title = (await item.getAttribute('title')) || '';

      expect(titles.includes(title)).toBe(true);
    }
  });

  test('should render country cca2 in dropdown item', async ({ page }) => {
    const items = await page
      .locator('.prefix-dropdown-test_list .prefix-dropdown_text')
      .elementHandles();

    const cca2Arr = countries.map((country) => country.getCca2());

    for await (const item of items) {
      const text = await item.innerText();

      expect(cca2Arr.includes(text)).toBeTruthy();
    }
  });

  test('should render country flags in dropdown item', async ({ page }) => {
    const items = await page
      .locator('.prefix-dropdown-test_list .prefix-dropdown_flag')
      .elementHandles();

    const flags = countries.map((country) => country.getFlag());

    for await (const item of items) {
      const flag = (await item.getAttribute('src')) || '';

      expect(flags.includes(flag)).toBeTruthy();
    }
  });
});
