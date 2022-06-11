import ipt from 'ipt';

const opts = { stdin: process.stdin, stdout: process.stdout };

export = (inItems, inOptions?) => {
  const items = inItems || [];

  return new Promise((resolve, reject) => {
    ipt(items, { ...opts, ...inOptions })
      .then((res) => resolve(res[0]))
      .catch(reject);
  });
};
