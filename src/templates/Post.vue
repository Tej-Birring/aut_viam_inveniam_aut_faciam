<template>
    <Layout>
        <div class="break"></div>
        <div class="info">
            <b-button class="backBtn" variant="secondary" @click.prevent.stop="goHome">
                <b-icon icon="arrow-left"/>
            </b-button>
            <div class="dateInfo">
                <div class="date">
                    <b-icon class="mr-1" icon="calendar-fill"/>
                    <span class="font-weight-bold">Published:&nbsp</span>
                    <span>{{formatDate($page.post.date_published)}}</span>
                </div>
                <div class="date" v-if="showLastModified">
                    <b-icon class="mr-1" icon="calendar-fill"/>
                    <span class="font-weight-bold">Last Updated:&nbsp</span>
                    <span>{{formatDate($page.post.date_last_modified)}}</span>
                </div>
            </div>
        </div>

        <h1 class="text-center display-4">{{$page.post.title}}</h1>

        <div class="postContent" v-html="$page.post.content">

        </div>

        <div class="break mt-4"></div>
    </Layout>
</template>

<script>
    export default {
        name: "Post",
        layout: "Posts",
        methods: {
            formatDate(dateString) {
                return this.$dayjs(dateString).format("dddd Do MMMM YYYY");
            },
            goHome() {
                this.$router.push(`/`);
            }
        },
        computed: {
            showLastModified() {
                return (this.$page.post.date_published !== this.$page.post.date_last_modified)
            }
        }
    }
</script>

<style scoped lang="scss">
    .break {
        border-bottom: 1px solid $theme-color-5;
        /*margin-bottom: 2rem;*/
    }

    .info {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: flex-start;
        padding-top: 1rem;
        padding-bottom: 1.4rem;
    }

    .dateInfo {
        display: flex;
        flex-flow: column nowrap;
    }

    .date {
        color: $theme-color-6;
        display: flex;
        flex-flow: row nowrap;
        font-size: 1rem;
        align-items: center;
        justify-content: flex-start;
        :first-child {
            margin-right: 0.2rem;
            margin-bottom: 0.19rem;
        }
    }

    .postContent {

    }
</style>

<page-query>
    query($id: ID!) {
        post(id: $id) {
            title,
            date_published,
            date_last_modified,
            content
        }
    }
</page-query>

