# watch

## description
> 接口1s钟一次，调用是没有问题的。但把时间改成0.1s调用，就会出现问题。

~~~
HTTPConnectionPool(host='127.0.0.1', port=4210): Max retries exceeded with url: /nodeapp/v1/update_thumbnail (Caused by NewConnectionError('<requests.packages.urllib3.connection.HTTPConnection object at 0x7f16e2842978>: Failed to establish a new connection: [Errno 111] Connection refused',))
^
~~~

## solution
~~~
问题问的太模糊，挂掉了是什么情况也没有描述。
--watch 默认监控所有文件，我猜测你连带日志文件一起监控了，程序不断的写入某个日志文件，pm2监控到日志文件的变化然后不断的重启，这就是你所谓的挂掉了。
~~~

## resources
- https://segmentfault.com/q/1010000009708168
