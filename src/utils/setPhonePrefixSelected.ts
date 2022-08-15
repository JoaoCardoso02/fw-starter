import setEveryPhonePrefixAsUnselected from './setEveryPhonePrefixAsUnselected';

export default function setPhonePrefixSelected(dropdownItem: Element) {
  setEveryPhonePrefixAsUnselected();

  dropdownItem.setAttribute('aria-selected', 'true');
  dropdownItem.classList.add('w--current');
  const prefixFlagSelected = dropdownItem.getElementsByTagName('img')[0]?.getAttribute('src');
  const prefixCca2Selected = dropdownItem.getElementsByTagName('p')[0]?.innerText;

  const toggleFlag = document.querySelector('#w-dropdown-toggle-1 img');
  const toggleCca2 = document.querySelector('#w-dropdown-toggle-1 div');

  if (prefixFlagSelected) {
    toggleFlag?.setAttribute('src', prefixFlagSelected);
  }

  if (prefixCca2Selected && toggleCca2) {
    toggleCca2.textContent = prefixCca2Selected;
  }
}
