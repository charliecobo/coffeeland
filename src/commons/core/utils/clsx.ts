interface IClasses {
  [key: string]: boolean;
}

export const clsx = (defaultClasses = '', classes?: IClasses) => {
  let conditionalClasses;

  if (classes) {
    conditionalClasses = Object.entries(classes)
      .filter(([_, value]) => value)
      .map(([key]) => key)
      .join(' ');
  }

  return `${defaultClasses} ${conditionalClasses}`.trim();
};
