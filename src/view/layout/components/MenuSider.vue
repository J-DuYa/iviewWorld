<template>
    <Menu :active-name="routers.length != 0 ? routers[0].id : ''" theme="dark" width="auto" :class="menuitemClasses">
        <MenuItem :name="route.id" :to="route.menuUrl" v-for="(route, index) in routers" :key="index">
            <Icon :type="route.icon"></Icon>
            <span>{{route.title}}</span>
        </MenuItem>
    </Menu>
</template>

<script>
    import routers from '@/components/MenuRouter/index'
    export default {
        name: "MenuSider",
        props: {
            menuitemClasses: {
                type: Function,
                default: () => {}
            }
        },
        data() {
            return {
                routers: routers
            }
        },
        methods: {

        },
        watch: {

        }
    }
</script>

<style scoped>

</style>
