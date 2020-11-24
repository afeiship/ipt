module.exports = {
  apps: [
    {
      name: 'pm2-notes',
      script: 'src/app.js',
      output: './log/access.log',
      error: './log/error.log',
      args: '',
      ignore_watch: ['node_modules'],
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
};
