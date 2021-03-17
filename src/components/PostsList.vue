<template>
    <div class="grid">
        <b-card class="shadow-sm post" v-for="post in posts" :key="post.id" bg-variant="light" no-body>
            <b-card-header class="text-center">
                {{post.title}}
            </b-card-header>
            <b-card-body class="d-flex flex-column flex-nowrap justify-content-between">
                <p v-if="post.excerpt">
                    {{post.excerpt}}
                </p>
                <div class="cardTags">
                    <b-badge class="mr-2 bg-theme-color-6" pill variant="dark" v-for="tag in post.tags" :key="tag">{{tag}}</b-badge>
                </div>
            </b-card-body>
            <b-card-footer class="text-small">
                <div class="footer">
                    <div class="published">
                        <b-icon icon="calendar-fill"/>
                        <span>{{formatDate(post.date_published)}}</span>
                    </div>
                    <b-button size="sm" variant="info" @click.prevent.stop="gotoPost(post)">Read</b-button>
                </div>
            </b-card-footer>
        </b-card>
    </div>
</template>

<script>
    export default {
        name: "PostsList",
        props: {
            posts: {
                type: Array,
                required: true
            }
        },
        methods: {
            formatDate(dateString) {
                return this.$dayjs(dateString).format("dddd Do MMMM YYYY");
            },
            gotoPost(post) {
                this.$router.push(`/posts/${post.fileInfo.name}`);
            }
        }
    }
</script>

<style scoped lang="scss">
    .grid {
        align-self: start;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        /* This is better for small screens, once min() is better supported */
        /* grid-template-columns: repeat(auto-fill, minmax(min(200px, 100%), 1fr)); */
        grid-gap: 1rem;
        /* This is the standardized property now, but has slightly less support */
        /* gap: 1rem */
        .post {
            min-height: 20rem;
        }
    }

    .footer {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
    }

    .published {
        display: flex;
        flex-flow: row nowrap;
        font-size: 0.8rem;
        align-items: center;
        justify-content: flex-start;
        :first-child {
            margin-right: 0.2rem;
            margin-bottom: 0.19rem;
        }

        .cardTags {
            display: block;
        }
    }
</style>