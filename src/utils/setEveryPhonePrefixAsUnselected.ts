export default function setEveryPhonePrefixAsUnselected() {
  const dropdownItems = document.querySelectorAll('.prefix-dropdown_item-2');

  dropdownItems.forEach((dropdownItem) => {
    dropdownItem.setAttribute('aria-selected', 'false');
    dropdownItem.classList.remove('w--current');
  });
}
