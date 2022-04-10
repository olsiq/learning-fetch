export const letsFetchAdvice = async (url) => {
  const res = await fetch(url);
  const response = await res.json();
  const list = await response.slip.advice;
  return list;
};
