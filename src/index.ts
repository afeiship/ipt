import ipt from 'ipt';

type Items = { name: string; value: string }[] | string[];

const defaults = {
  stdin: process.stdin,
};

export = (inItems: Items, inOptions?) => {
  const items = inItems || [];
  const opts = { ...defaults, ...inOptions };

  return new Promise((resolve, reject) => {
    ipt(items, opts)
      .then((res) => resolve(res[0]))
      .catch(reject);
  });
};
