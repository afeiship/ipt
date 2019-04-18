# watch-restart
> 这块好像并不能通过 `ecosystem.config.js` 文件里的配置参数  watch 来配置。

## watch when file changed
```shell
# start
pm2 start --watch

# stop
pm2 stop pm2-notes --watch
```

