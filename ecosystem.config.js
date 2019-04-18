module.exports = {
  apps: [
    {
      name: 'pm2-notes',
      script: 'app.js',
      output: './pm2notes-access.log',
      error: './pm2notes-error.log',
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
  ],

  // TODO: UNUSED
  deploy: {
    production: {
      user: 'node',
      host: '0.0.0.0',
      ref: 'origin/master',
      repo: 'git@github.com:repo.git',
      path: '/var/www/production',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
