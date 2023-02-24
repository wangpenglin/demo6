export default defineAppConfig({
  pages: [
    'pages/index/index',
  ],
  subpackages: [
    {
      root: 'product',
      pages: [
        'pages/index',
      ]
    },
    {
      root: 'user',
      pages: [
        'pages/login',
        'pages/index',
      ]
    },
  ],
  //'pages/common/header.component',
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
    navigationStyle: 'custom',
  },
  "lazyCodeLoading": "requiredComponents",
})
