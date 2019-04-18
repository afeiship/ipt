# Clusterize
> The cluster mode scales your app accross all CPUs available, without any code modifications.

## max cpu
```shell
pm2 start app.js -i max
```
## cpu 4
```shell
pm2 start app.js -i 4
```

## CURD
```shell
# create
pm2 start src/app.js
pm2 restart src/app.js

# list
pm2 list

# stop (pid:0)
pm2 stop 0
pm2 stop all

# delete
pm2 delete src/app.js
pm2 delete all
```
