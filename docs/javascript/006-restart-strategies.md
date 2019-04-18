# restart-strategies

## Fixed Restart Delaylink

## cmd line
```shell
pm2 start app.js --restart-delay=3000
```

## Or via ecosystem.config.js file:
```js
module.exports = [{
  script: 'app.js',
  restart_delay: 3000
}]
```
