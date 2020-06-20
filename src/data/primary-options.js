const options = [
  { value: 'onboardingprocess', label: 'Onboarding Process' },
  { value: 'hresources', label: 'Human Resources' },
];

export const primaryOptions = options.sort((x, y) => {
  if (x.value < y.value) {
    return -1;
  }
  if (x.value > y.value) {
    return 1;
  }
  return 0;
});
