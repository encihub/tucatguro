export const format = (phone: string) =>
  phone.length === 12
    ? [0, 3, 6, 9].map((index) => phone.slice(index, index + 3)).join(' ')
    : phone;
