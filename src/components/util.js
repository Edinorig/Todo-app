const differenceInDays = (givenDate) => {
  const today = new Date();
  const [year, month, day] = givenDate.split("-").map(Number);

  const target = new Date(year, month - 1, day);

  today.setHours(0, 0, 0, 0);
  target.setHours(0, 0, 0, 0);

  const diffTime = target - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
};

const setCookie = (name, value, days) => {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + days);
  document.cookie = `${name}=${value}; expires=${expirationDate.toUTCString()}; path=/`;
};
// Example: setCookie("username", "john_doe", 7);
const getCookie = (name) => {
  const cookies = document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${name}=`));
  return cookies ? cookies.split('=')[1] : null;
};
// Example: const username = getCookie("username");
const deleteCookie = (name) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};
// Example: deleteCookie("username");

export { differenceInDays, setCookie, getCookie, deleteCookie };