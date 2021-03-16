// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Aut Viam Inveniam Aut Faciam',
  titleTemplate: 'Aut Viam Inveniam Aut Faciam',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'src/assets/posts/**/*.md',
        typeName: 'Post',
        remark: {
          // remark options
        }
      }
    }
  ],
  templates: {
    Post: '/posts/:title'
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "@/assets/styles/global.vars.scss";'
      }
    }
  }
};
