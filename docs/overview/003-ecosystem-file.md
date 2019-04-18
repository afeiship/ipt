# ecosystem-file
> The purpose of the ecosystem file is to gather all options and environment variables for all your applications.

## generate template file
```shell
pm2 init
```

## current app
```js
module.exports = {
  apps : [
    {
      name: 'pm2-notes',
      script: 'src/app.js',
      args: '',
      instances: 2,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
}
```

## start
```js
pm2 start ecosystem.config.js --env production
```
