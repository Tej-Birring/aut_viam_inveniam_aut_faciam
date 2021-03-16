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
        //resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      }
    },
    {
      use: 'gridsome-plugin-flexsearch',
      options: {
        searchFields: ['title', 'tags', 'seo_keywords', 'content', 'seo_description'],
        collections: [
          {
            typeName: 'Post',
            indexName: 'Post',
            fields: [
              'id',
              'fileInfo',
              'title',
              'excerpt',
              'date_published',
              'tags'
            ]
          }
        ]
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
  },
  transformers: {
    remark: {
      plugins: [
          "@gridsome/remark-prismjs",
          ['@noxify/gridsome-remark-classes', {
            'image': 'img-fluid',
          }]
      ]
    }
  }
};
