module.exports = {
  title: 'itmacy\'s blog',
  description: 'itmacy的个人网站',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/asset/logo.png' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    logo: '/asset/logo.png', // 导航栏logo
    nav:[ // 导航栏链接
      {text: '前端',link: '/page/web/'},
      {text: 'java',link: '/page/java/'},
      {text: 'c++',link: '/page/cpp/'},
      {text: '关于',
        items: [
          {text: 'github', link: 'https://github.com/itmacy'},
          {text: '博客园', link: 'https://www.cnblogs.com/itmacy/'},
          {text: '简书', link: 'https://www.jianshu.com/u/88c9ba7ac8bd' },
          {text: '微信公众号', link: '/wechat' },
          {text: '关于', link: '/about.md' },
        ]
      }

    ],
    // sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 2, // 侧边栏显示2级
    lastUpdated: 'Last Updated',
    sidebar: {
      /**************前端******************/
      '/page/web/':[
        '',
        'html',
        'html5',
        'css',
        'css3',
        'js',
        'es6',
      ],
      /**************java******************/
      '/page/java/':[
        ''
      ],
      /**************c++******************/
      '/page/cpp/':[
        ''
      ],
      /**************fallback******************/
      '/page/':[
          '',
      ],
      '/':[
          '',
          'about.md',
          'contact.md'
      ],
    }
  }
};