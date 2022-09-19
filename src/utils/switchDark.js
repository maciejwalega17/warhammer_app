export const switchDark = () => {
  document.documentElement.style.setProperty(
    '--bg-primary-color',
    'rgb(43, 43, 43)'
  );
  document.documentElement.style.setProperty(
    '--bg-secondary-color',
    'rgb(66, 66, 66)'
  );
  document.documentElement.style.setProperty(
    '--bg-tertiary-color',
    'rgb(121, 121, 121)'
  );
  document.documentElement.style.setProperty(
    '--bg-quaternary-color',
    'rgb(51, 51, 51)'
  );
  document.documentElement.style.setProperty(
    '--text-color',
    'rgb(255, 255, 255)'
  );
};
