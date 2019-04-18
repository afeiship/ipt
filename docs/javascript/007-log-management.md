# log-management
> Logs are available at realtime and are saved into your hard disk.

## configuration
```js
// realpath: $HOME/.pm2/logs
module.exports = {
  apps: [{
      name: 'app',
      script: 'app.js',
      output: './out.log', // $HOME/.pm2/logs/out.log
      error: './error.log',
	    log: './combined.outerr.log',
    }]
}
```

## null to log
```js
// ...
output: '/dev/null',
error: '/dev/null',
// ...
```
