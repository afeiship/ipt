# ipt
> An ipt wrapper.

## installation
```shell
npm i -S @jswork/ipt
```

## usage
```js
// es6
import ipt from '@jswork/ipt';
// es5
const ipt = require('@jswok/ipt');

// select by user
ipt(['option1', 'option2']).then(res=>{
  console.log(res);
  // 'option1'
});
```
