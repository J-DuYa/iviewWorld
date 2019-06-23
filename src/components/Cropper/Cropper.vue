<template>
    <Modal
        :title="title"
        v-model="isShowCropper"
        :mask-closable="false"
        @on-cancel="closeModel"
        @on-ok="submitCropper">
        <p>Content of dialog</p>
        <p>Content of dialog</p>
        <p>Content of dialog</p>
    </Modal>
</template>

<script>
    export default {
        name: "Cropper",
        props: {
            title: {
                type: String,
                default: '上传图片'
            },
            isShowModel: {
                type: Boolean,
                default: false
            }
        },
        components: {},
        data() {
            return {
                isShowCropper: this.isShowModel
            }
        },
        methods: {
            closeModel() {
              this.$emit('update:isShowModel', false)
            },
            submitCropper() {

            }
        },
        watch: {
            isShowModel(val) {
                this.isShowCropper = val
            }
        },
        created() {
            // console.log(this.isShowModel)
        }
    }
</script>

<style scoped>

</style>
