<template>
    <Card style="width:350px" class="headCard">
        <p slot="title" class="headCard-title">
            <!--<Icon type="ios-film-outline"></Icon>-->
            {{ data.title }}
        </p>
        <a href="#" slot="extra" @click.prevent="">
            <Icon type="ios-loop-strong"></Icon>
            编辑
        </a>
        <slot></slot>
    </Card>
</template>

<script>
    import './index.less'
    export default {
        name: "HeadCard",
        props: {
            data: {
                type: Object,
                default: () => {
                    title: 'Thirdworld-Card'
                }
            }
        },
        data() {
            return {

            }
        },
        methods: {

        }
    }
</script>

<style lang="scss" scoped>

</style>
