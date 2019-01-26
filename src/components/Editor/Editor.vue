<template>
    <quill-editor
    ref="thEditor"
    v-model="editor"
    :options="option"
    @blur="onEditorBlur($event)"
    @focus="onEditorFocus($event)"
    @change="onEditorChange($event)">
    </quill-editor>
</template>

<script>
    import { quillEditor } from "vue-quill-editor"; //调用编辑器
    import 'quill/dist/quill.core.css';
    import 'quill/dist/quill.snow.css';
    import 'quill/dist/quill.bubble.css';

    export default {
        name: "ThEditor",
        components: { quillEditor },
        props: {
            content: {
                type: String,
                default: ""
            },
            option: {
                type: Object,
                default: () => {
                    return {
                        modules:{
                            toolbar: [
                                ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
                                ['blockquote', 'code-block'],
                                [{ 'indent': '-1'}, { 'indent': '+1' }],
                                [{ 'direction': 'rtl' }],
                                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                                [{ 'size': ['small', false, 'large', 'huge'] }],
                                [{ 'color': [] }, { 'background': [] }],
                                [{ 'font': [] }],
                                [{ 'align': [] }],
                                [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                                [{ 'script': 'sub'}, { 'script': 'super' }],
                                ['image'],
                                ['video'],
                                ['clean']
                            ]
                        },
                        placeholder: "请输入你想写的内容",
                        theme: "snow"
                    }
                }
            }
        },
        data() {
            return {
                editor: this.content
            }
        },
        methods: {
            onEditorBlur(e) {
                this.$emit('editorBlur', e)
            },
            onEditorFocus(e) {
                this.$emit('editorFocus', e)
            },
            onEditorChange(e) {
                this.$emit('editorChange', e)
            }
        },
        watch: {
            content(val) {
                this.editor = val
            }
        }
    }
</script>

<style scoped>
    .quill-editor {
        height: 500px;
    }
</style>
