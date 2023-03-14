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

// use object[];
ipt([
  { name: 'key1', value: 'value1' },
  { name: 'key2', value: 'value2' },
  { name: 'key3', value: 'value3' },
]).then(res=>{
  // value1 or value2 or value3
  console.log('value is: ', res);
})
```
