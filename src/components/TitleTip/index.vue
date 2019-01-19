<template>
    <div class="th_title mt10">
       <div class="name">
            {{title}}
       </div>
        <div class="btnGroup">

        </div>
    </div>
</template>

<script>
    export default {
        name: "TitleTip",
        props: {
            title: {
                type: String,
                default: "标题"
            }
        }
    }
</script>

<style lang="scss" scoped>
.th_title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
    width: 100%;
    min-width: 200px;
    height: 40px;
    line-height: 40px;
    /*box-shadow: 0 0 8px 4px #ddd;*/
    .name {
        font-size: 14px;
    }
    .btnGroup {

    }
}
</style>
