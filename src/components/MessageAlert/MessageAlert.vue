<template>
    <transition name="fade">
        <div class="t_messageAlert"  v-if="!isClose">
            <div :class="wrapClasses" class="pd10">
                <span :class="iconClasses" v-if="showIcon">
                    <slot name="icon">
                        <Icon :type="iconType"></Icon>
                    </slot>
                </span>
                <slot></slot>
                <a :class="infoClasses" v-if="isHasInfoIcon && !isHasCloseIcon">
                    <slot name="close">
                        <Tooltip :content="tipMessage" theme="light" placement="bottom-start">
                            <Icon type="ios-information-circle-outline"></Icon>
                        </Tooltip>
                    </slot>
                </a>
                <a :class="closeClasses" @click="closeAlert" v-if="isHasCloseIcon">
                    <slot name="close">
                        <Icon type="ios-close"></Icon>
                    </slot>
                </a>
            </div>
        </div>
    </transition>
</template>

<script>
    const prefixCls = 'th_world';

    export default {
        name: "MessageAlert",
        props: {
            showIcon: {
                type: Boolean,
                default: false
            },
            iconType: {
                type: String,
                default: `ios-close`
            },
            type: {
                type: String,
                default: 'info'
            },
            isHasCloseIcon: {
                type: Boolean,
                default: false
            },
            isHasInfoIcon: {
                type: Boolean,
                default: false
            },
            tipMessage: {
                type: String,
                default: '这是一个提示'
            }
        },
        data() {
            return {
                isClose: false,
            }
        },
        computed: {
            wrapClasses() {
                return [
                    `${prefixCls}`,
                    `${prefixCls}-${this.type}`,
                    `${prefixCls}-` + 'b-r-4'
                ]
            },
            closeClasses() {
                return [
                    `${prefixCls}`,
                    `${prefixCls}-` + 'alert-close',
                ]
            },
            infoClasses() {
                return [
                    `${prefixCls}`,
                    `${prefixCls}-` + 'alert-info',
                ]
            },
            iconClasses() {
                return [

                ]
            },
        },
        methods: {
            //关闭alert
            closeAlert() {
                this.isClose = true
            },
        }
    }
</script>
<style lang="scss" scoped>

</style>
