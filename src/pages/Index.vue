<template>
  <Layout>

    <p class="info cardo text-muted">
      This is essentially an archive of the intellectual wanderings of a Computer Systems Engineer.
      Nothing you will find here is (intended to be) substantive.
    </p>

    <b-input class="search-bar shadow text-center font-weight-bold"
             type="search"
             id="search"
             placeholder="Search"
             v-model="search"
             @focus="focusIn"
             @blur="blurOut"
    >
    </b-input>

    <div class="wrap">
      <PostsList :posts="postsToShow"/>

      <b-pagination
              class="mt-5"
              v-model="currentPage"
              :total-rows="$page.posts.edges.length"
              :per-page="nPostsPerPage"
              first-number
              last-number
              pills
              align="center">
      </b-pagination>
    </div>

  </Layout>
</template>


<script>
import PostsList from "../components/PostsList";

export default {
  components: {PostsList},
  metaInfo: {
    title: 'Hello, world!'
  },
  data() {
    return {
      search: "",
      currentPage: 1,
      nPostsPerPage: 6,
    }
  },
  methods: {
    focusIn() {
      document.getElementById("search").classList.add("shadow-lg");
    },
    blurOut() {
      document.getElementById("search").classList.remove("shadow-lg");
    }
  },
  computed: {
    posts() {
      let posts = this.$page.posts.edges.map( el => el.node );
      const beginIdx = ((this.currentPage-1) * this.nPostsPerPage);
      const endIdx = beginIdx + this.nPostsPerPage;
      posts = posts.slice(beginIdx, endIdx);
      return posts;
    },
    searchResults () {
      if (!this.search) return [];
      let posts = this.$page.posts.edges.map( el => el.node );
      posts = posts.filter( el => {
        return el.searchString.includes(this.search.toLowerCase());
      } );
      return posts;
    },
    postsToShow() {
      if (this.search)
        return this.searchResults;
      else
        return this.posts;
    }
  },
}
</script>


<style scoped lang="scss">
  .info {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    margin-bottom: 3rem;
    @media (min-width: $bp-md) {
      width: 92%;
    }
    @media (min-width: $bp-lg) {
      width: 60%;
    }
  }

  .search-bar {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 4rem;
    @media (min-width: $bp-lg) {
      width: 70%;
    }
    color: transparent;
    text-shadow: 0 0 0 $theme-color-7;
    cursor: pointer;
  }

  .wrap {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    min-height: 80vh;
  }

  input[type="search"]:focus {
    outline: none;
    border: none 4px;
    cursor: default;
  }

  input[type="search"]::-webkit-search-cancel-button {
    /* Remove default */
    -webkit-appearance: none;
    /* Now your own custom styles */
    cursor: pointer;
    height: 22px;
    width: 22px;
    background-repeat: no-repeat;
    background-image: url("data:image/svg+xml;utf8,<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512'><path fill='%23292F36' d='M490.677,64.005H133.088c-7.189,0-13.888,3.627-17.856,9.643L3.488,244.315c-4.651,7.104-4.651,16.277,0,23.381 l111.744,170.667c3.968,6.016,10.667,9.643,17.856,9.643h357.589c11.797,0,21.333-9.536,21.333-21.333V85.339 C512.011,73.541,502.475,64.005,490.677,64.005z M399.093,356.421c-4.16,4.16-9.621,6.251-15.083,6.251 c-5.461,0-10.923-2.091-15.083-6.251l-70.251-70.251l-70.251,70.251c-4.16,4.16-9.621,6.251-15.083,6.251 c-5.461,0-10.923-2.091-15.083-6.251c-8.341-8.341-8.341-21.824,0-30.165l70.251-70.251l-70.251-70.251 c-8.341-8.341-8.341-21.824,0-30.165s21.824-8.341,30.165,0l70.251,70.251l70.251-70.251c8.341-8.341,21.824-8.341,30.165,0 s8.341,21.824,0,30.165l-70.251,70.251l70.253,70.251C407.434,334.597,407.434,348.08,399.093,356.421z'/></svg> ");
    /* Will place small red box on the right of input (positioning carries over) */
  }
</style>


<page-query>
  query {
  posts: allPost {
  pageInfo {
  totalPages,
  currentPage
  },
  edges {
  node {
  id,
  fileInfo{name},
  title,
  excerpt,
  date_published
  tags,
  searchString
  }
  }
  }
  }
</page-query>


<!--<page-query>-->
<!--  query ($page: Int) {-->
<!--    posts: allPost(perPage: 6, page: $page, sortBy: "date_published", order: DESC) @paginate {-->
<!--      pageInfo {-->
<!--        totalPages,-->
<!--        currentPage-->
<!--      },-->
<!--      edges {-->
<!--        node {-->
<!--          id,-->
<!--          fileInfo{name},-->
<!--          title,-->
<!--          customExcerpt,-->
<!--          date_published-->
<!--          tags-->
<!--        }-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--</page-query>-->