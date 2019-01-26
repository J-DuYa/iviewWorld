<template>
    <div class="thEditor">
        <MessageTip class="mb20">
            富文本编辑器<br>
            输出的是HTML标签格式
        </MessageTip>
        <Button type="success" size="large" @click="submitForm">提交</Button>
        <ThEditor
            :content.sync="content"
            class="mt20"
            @editorChange="editorChange"></ThEditor>
    </div>
</template>

<script>
    export default {
        name: "Editor",
        data() {
            return {
                content: ""
            }
        },
        methods: {
            editorChange(obj) {
                this.content = obj.html
            },
            submitForm() {
                if(this.content) {
                    this.$Message.success({
                        content: this.content,
                        duration: 10,
                        closable: true
                    });
                } else {
                    this.$Message.error('编辑器内容不能为空');
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.thEditor {

}
</style>
