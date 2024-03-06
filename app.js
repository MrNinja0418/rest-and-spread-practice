const filterOutOdds = (...nums) => nums.filter((num) => num % 2 === 0);

const findMin = (...args) => Math.min(...args);

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

const doubleAndReturnArgs = (arr, ...args) => {
  const doubledArgs = args.map((arg) => arg * 2);
  return [...arr, ...doubledArgs];
};

const removeRandom = (items) => {
  const randomIdx = Math.floor(Math.random() * items.length);
  return [...items.slice(0, randomIdx), ...items.slice(randomIdx + 1)];
};

const extend = (arr1, arr2) => [...arr1, ...arr2];

const addKeyVal = (obj, key, val) => ({ ...obj, [key]: val }); //w/ object enhancement

const removeKey = (obj, key) => {
  const newObj = { ...obj };
  delete newObj[key];
  return newObj;
};

const combine = (obj1, obj2) => ({ ...obj1, ...obj2 });

const update = (obj, key, val) => ({ ...obj, [key]: val }); // w/ object enhancement
