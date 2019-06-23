<template>
    <div class="layout">
        <Layout>
            <Sider ref="sideRoute" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed" class="menuSider" v-show="!isCollapsed">
                <div class="headerImg">
                    <img :src="$store.getters.basicInfo.headImg"/>
                </div>
                <MenuSider :menuitemClasses.sync="menuitemClasses" class="th_Menu" :isCollapsed.sync="isCollapsed"/>
            </Sider>
            <Layout>
                <Header :style="{padding: 0}" class="layout-header-bar">
                   <div class="flex-betwwen pd10">
                       <div>
                           <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu" size="24"></Icon>
                           <span class="font14">{{title.title}}</span>
                           &nbsp;&nbsp;&nbsp;&nbsp;
                           <ColorPicker v-model="themeBg" alpha v-show="!isCollapsed" @on-change="changeThemeColor"/>
                       </div>
                       <!-- 用户头像 -->
                       <div v-show="!isCollapsed">
                           <i id="th_theme">&nbsp;</i>
                           <Avatar :src="$store.getters.basicInfo.headImg" />
                           &nbsp;
                           <Dropdown placement="bottom-start" @on-click="chooseDrop">
                               <a href="javascript:void(0)">
                                   <Icon type="ios-arrow-down"></Icon>
                               </a>
                               <DropdownMenu slot="list">
                                   <DropdownItem name="basicInfo">个人信息</DropdownItem>
                                   <DropdownItem name="signout">退出</DropdownItem>
                               </DropdownMenu>
                           </Dropdown>
                           &nbsp;&nbsp;
                       </div>
                   </div>
                </Header>
                <!-- 标题   -->
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
                themeBg: 'rgba(25, 190,107, .5)',
                isCollapsed: false,
                github: github,
                title: this.$store.getters.headTitle
            }
        },
        methods: {
            // 得到取色器的颜色
            changeThemeColor(theme) {
                this.$store.dispatch('changeThemeColor', theme)
            },
            collapsedSider () {
                this.$refs['sideRoute'].toggleCollapse();
            },

            chooseDrop(name) {
                switch (name) {
                    case 'basicInfo':
                        this.$router.push({
                            name: 'basicInfo'
                        });
                        break;
                    case 'signout':
                        this.$router.push({
                            name: 'login'
                        });
                        break;
                    default:
                        break;

                }
            }
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
        watch: {

        }
    }
</script>

<style lang="scss">
    .headerImg {
        margin: 10px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
           width: 80px;
           height: 80px;
           border-radius: 100%;
        }
    }
    .th_Menu {
        overflow: hidden;
        .ivu-menu {

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
        background: #fff!important;
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
    .collapsed-menu .ivu-menu-submenu-title-icon {
        display: none;
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
    .btnGroup {
        padding: 0 20px;
    }
</style>
