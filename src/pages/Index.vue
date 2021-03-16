<template>
  <Layout>

    <p class="info cardo text-muted">
      This is essentially an archive of the intellectual wanderings of a Computer Systems Engineer.
      Nothing you will find here is (intentionally) substantive.
    </p>

    <b-input class="search-bar shadow text-center font-weight-bold" type="text" id="search" placeholder="Search"
             v-model="search">
    </b-input>

    {{ searchResults }}
<!--    <PostsList :posts="posts"/>-->

    <div>

    </div>
<!--    &lt;!&ndash; Learn how to use images here: https://gridsome.org/docs/images &ndash;&gt;-->
<!--    <g-image alt="Example image" src="~/favicon.png" width="135" />-->

<!--    <h1>Hello, world!</h1>-->

<!--    <p>-->
<!--      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores-->
<!--    </p>-->

<!--    <p class="home-links">-->
<!--      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>-->
<!--      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>-->
<!--    </p>-->

<!--    <b-card>asdasdasd</b-card>-->
<!--    <b-button>Asd</b-button>-->
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
      search: ""
    }
  },
  computed: {
    posts() {
      return this.$page.posts.edges.map( el => {
          return el.node;
      });
    },
    searchResults () {
      const searchTerm = this.search;
      if (searchTerm.length < 3) return [];
      return this.$search.search({ query: searchTerm, limit: 5 })
    }
  }
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
  }


</style>


<page-query>
  query {
    posts: allPost {
      edges {
        node {
          id,
          fileInfo{name},
          title,
          excerpt,
          date_published
          tags,
        }
      }
    }
  }
</page-query>