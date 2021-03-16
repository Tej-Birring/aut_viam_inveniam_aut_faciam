<template>
    <Layout>
        <div class="break"></div>
        <div class="info">
            <div class="dateInfo">
                <div class="date">
                    <b-icon icon="calendar-fill"/>
                    <span class="font-weight-bold">Published:&nbsp</span>
                    <span>{{formatDate($page.post.date_published)}}</span>
                </div>
                <div class="date" v-if="showLastModified">
                    <b-icon icon="calendar-fill"/>
                    <span class="font-weight-bold">Last Modified:&nbsp</span>
                    <span>{{formatDate($page.post.date_last_modified)}}</span>
                </div>
            </div>
        </div>

        <h1 class="text-center display-4">{{$page.post.title}}</h1>

        <div class="content" v-html="$page.post.content">

        </div>
        {{$page.post}}
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
        padding-top: 1rem;
        padding-bottom: 1.6rem;
    }

    .dateInfo {
        display: flex;
        flex-flow: column nowrap;
    }

    .date {
        color: $theme-color-6;
        display: flex;
        flex-flow: row nowrap;
        font-size: 0.8rem;
        align-items: center;
        justify-content: flex-start;
        :first-child {
            margin-right: 0.2rem;
            margin-bottom: 0.19rem;
        }
    }

    .content {

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

