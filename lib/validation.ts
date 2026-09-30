const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const isEmail = (value: string) =>
  value.length <= 254 && EMAIL.test(value);
