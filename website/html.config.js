module.exports = {

  title: 'React-vis',

  baseHref: process.env.NODE_ENV === 'production' ? 'website/dist/' : '/',

  meta: [{
    name: 'description',
    content: 'A composable charting library'
  }],

  scripts: [{
    src: './redirect.js',
    type: 'text/javascript'
  }]

};
