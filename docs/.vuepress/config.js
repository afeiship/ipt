module.exports = {
  base: '/pm2-notes/',
  title: 'Pm2 notes',
  host: '0.0.0.0',
  description: 'Pm2 notes',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: 'http://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg'
      }
    ]
  ],
  themeConfig: {
    sidebar: [
      {
        title: 'Get started',
        collapsable: false,
        children: [
          '/overview/001-install.md',
          '/overview/002-clusterize.md',
          '/overview/003-ecosystem-file.md',
          '/overview/004-load-balancing.md',
          '/overview/005-watch-restart.md',
          '/overview/006-restart-strategies.md',
          '/overview/007-log-management.md',
        ]
      }
    ]
  }
};
