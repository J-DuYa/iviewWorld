<template>
    <div class="layout">
        <Layout>
            <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed" class="menuSider">
                <div class="headerImg">
                    <img :src="github"/>
                </div>
                <MenuSider :menuitemClasses.sync="menuitemClasses" />
            </Sider>
            <Layout>
                <Header :style="{padding: 0}" class="layout-header-bar">
                    <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu" size="24"></Icon>
                </Header>
                <Page />
            </Layout>
        </Layout>
    </div>
</template>

<script>
    import github from '@/assets/images/github/github.jpg'
    import MenuSider from './components/MenuSider'
    import Page from './components/Page'

    export default {
        name: "TLayout",
        components: { MenuSider, Page },
        data() {
            return {
                isCollapsed: false,
                github: github
            }
        },
        methods: {
            collapsedSider () {
                this.$refs.side1.toggleCollapse();
            },
            // 循环遍历路由
        },
        computed: {
            rotateIcon () {
                return [
                    'menu-icon',
                    this.isCollapsed ? 'rotate-icon' : ''
                ];
            },
            menuitemClasses () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        },
    }
</script>

<style lang="scss">
    .headerImg {
        margin: 10px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
           width: 40%;
           height: 40%;
           border-radius: 100%;
        }
    }
    .layout{
        background: #f5f7f9;
        position: relative;
        overflow: hidden;
        .menuSider {
            font-size: 1rem!important;
        }
    }
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .menu-icon{
        transition: all .3s;
    }
    .rotate-icon{
        transform: rotate(-90deg);
    }
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
    .layout {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        .ivu-layout-has-sider {
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
        }
    }
</style>
