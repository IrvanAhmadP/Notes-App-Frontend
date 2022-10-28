const getLocalStorage = (key: string) => {
  return localStorage.getItem(key);
};

type putLocalStorageProps = {
  key: string;
  value: string;
};

const putLocalStorage = ({ key, value }: putLocalStorageProps) => {
  return localStorage.setItem(key, value);
};

export { getLocalStorage, putLocalStorage };
