

// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  });

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  });

  api.loadSource(({ addSchemaResolvers }) => {
    addSchemaResolvers({
      Post: {
        searchString: {
          type: "String",
          resolve(obj) {
            let entries = [
                obj.title,
                obj.tags ? obj.tags.join(" ") : "",
                obj.seo_keywords ? obj.seo_keywords.join(", ") : "",
                obj.seo_description,
                obj.content
            ];
            entries = entries
                .join(" ")
                .replace(/\r?\n|\r/g, " ")
                .replace(/\s+/g, " ")
                .toLowerCase();
            // console.log(entries);
            return entries;
          }
        }
      }
    })
  });
};

// const sanitizeHTML = require('sanitize-html');
// excerpt generation:
// resolve(obj) {
//   const length = 200;
//   const content = obj.content;
//   let excerpt = sanitizeHTML(content, {
//     allowedAttributes: {},
//     allowedTags: []
//   }).replace(/\r?\n|\r/g, ' ');
//
//   if (length && excerpt.length > length) {
//     excerpt = excerpt.substr(0, excerpt.lastIndexOf(' ', length - 1));
//   }
//
//   excerpt = excerpt.trim();
//   if (excerpt.endsWith(".")) {
//     return excerpt += "..";
//   }
//   else return excerpt += "...";
// }