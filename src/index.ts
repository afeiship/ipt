import ipt from 'ipt';

type Items = { name: string; value: string }[] | string[];

export = (inItems: Items, inOptions?) => {
  const items = inItems || [];

  return new Promise((resolve, reject) => {
    ipt(items, inOptions)
      .then((res) => resolve(res[0]))
      .catch(reject);
  });
};
