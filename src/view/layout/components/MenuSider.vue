<template>
    <div class="menuClass">
        <Menu :active-name="routers.length != 0 ? routers[0].id : ''" theme="dark" width="auto" :class="menuitemClasses" @on-select="selectMenu" v-if="!isCollapsed" accordion>
            <template v-for="(route, index) in routers">
                <template v-if="route.hasChild">
                   <Submenu :name="index">
                       <template slot="title">
                           <Icon :type="route.icon" />
                           {{route.title}}
                       </template>
                       <MenuItem :name="childRoute.id" :to="childRoute.menuUrl" v-for="(childRoute, childIndex) in route.child" :key="childIndex">
                           <Icon :type="childRoute.icon"></Icon>
                           <span>{{childRoute.title}}</span>
                       </MenuItem>
                   </Submenu>
                </template>
                <template v-else>
                    <Submenu :name="index">
                        <template slot="title">
                            <Icon :type="route.icon" />
                            {{route.title}}
                        </template>
                        <MenuItem :name="route.id" :to="route.menuUrl">
                            <Icon :type="route.icon"></Icon>
                            <span>{{route.title}}</span>
                        </MenuItem>
                    </Submenu>
                </template>
            </template>
        </Menu>
        <div class="menu-collapsed" v-else>
            <template v-for="(route, index) in routers">
                <Dropdown>
                    <a href="javascript:void(0)">
                        <Icon :type="route.icon" />
                    </a>
                </Dropdown>
            </template>
        </div>
    </div>
</template>

<script>
    import routers from '@/components/MenuRouter/index'
    export default {
        name: "MenuSider",
        props: {
            isCollapsed: {
              type: Boolean,
              default: false
            },
            menuitemClasses: {
                type: Array,
                default: () => {}
            }
        },
        data() {
            return {
                routers: routers
            }
        },
        methods: {
            selectMenu(name) {
                console.log(name)
            },
        },
        watch: {

        }
    }
</script>

<style lang="scss" scoped>
    .ivu-menu-submenu {
        font-size: 14px;
        .ivu-menu-submenu-title {
            i {
                position: relative;
                font-size: 14px;
                top: -1.6px!important;
            }
        }
        .ivu-menu {
            i {
                top: 2px!important;
                font-size: 13px;
                color: #fff!important;
            }
            span {
                /*font-size: 12px;*/
            }
        }
    }
    .menu-collapsed {
        margin-top: 10px;
        .ivu-dropdown {
            display: block;
            text-align: center;
            a {
                display: block;
                padding: 8px 0;
            }
            i {
                font-size: 28px;
            }
        }
    }
    .menu-collapsed .ivu-dropdown i {
        color: #fff!important;
    }
</style>
