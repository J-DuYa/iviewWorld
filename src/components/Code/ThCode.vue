<template>
    <div class="thCode">
        <textarea ref="code"></textarea>
    </div>
</template>

<script>
    import CodeMirror from 'codemirror'
    import 'codemirror/addon/lint/lint.css'
    import 'codemirror/lib/codemirror.css'
    import 'codemirror/theme/rubyblue.css'
    import 'codemirror/mode/javascript/javascript'
    import 'codemirror/addon/lint/lint'
    import 'codemirror/addon/lint/json-lint'
    import 'codemirror/theme/monokai.css'
    import "codemirror/keymap/sublime.js"

    export default {
        name: "ThCode",
        props: {
            content: {
                type: String,
                default: ""
            }
        },
        data() {
            return {

            }
        },
        computed: {

        },
        methods: {
            init() {

            }
        },
        watch: {

        },
        created() {
            this.init()
        }
    }
</script>

<style lang="scss" scoped>
.thCode {
    display: flex;
    justify-content: flex-start;
    textarea {
        padding: 10px;
        width: 45%;
        height: 600px;
    }
}
</style>
