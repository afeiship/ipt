# load-balancing
> The built-in load-balancer provides networked Node.js applications (http(s)/tcp/udp server) to be scaled across all CPUs available, without any code modifications.

## cli
```shell
pm2 start app.js -i max
```

## file
```js
module.exports = {
  apps: [
    {
      script: "src/app.js",
      instances: "max",
    }
  ]
}
```

## instance can be
1. an Integer. This spreads the app across a specific number of clusters.
2. the String ‘max’. This spreads the app across all CPU cores.
3. You can also use a negative integer. If 4 cores, pm2 start -i -1 will spread 3 clusters (max - integer).


