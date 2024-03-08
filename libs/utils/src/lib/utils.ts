export const addZero = (num: number) => (num < 10 ? `0${num}` : num);

export const generateUTCTimestamp = (date: Date) => {
  const year = date.getUTCFullYear();
  const month = addZero(date.getUTCMonth());
  const day = addZero(date.getUTCDate());
  return `${year}${month}${day}`;
};

export const buildResponse = (data: unknown | undefined) => ({
  result: data
});
