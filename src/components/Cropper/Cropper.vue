<template>
    <div>
        {{isShowModel}}
        {{isShowCropper}}
        <Modal
                title="Title"
                v-model="isShowCropper"
                :mask-closable="false"
                @onCancel="closeModel">
            <p>Content of dialog</p>
            <p>Content of dialog</p>
            <p>Content of dialog</p>
        </Modal>
    </div>
</template>

<script>
    export default {
        name: "Cropper",
        props: {
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
              this.$emit('isShowModel', false)
          }
        },
        watch: {
            isShowModel(val) {
                this.isShowCropper = val
            }
        }
    }
</script>

<style scoped>

</style>
