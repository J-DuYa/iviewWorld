<template>
    <div class="thMarkDown">
        <textarea v-model='content'></textarea>
        <div id="show-content"></div>
    </div>
</template>

<script>
    export default {
        name: "ThMarkdown",
        components: {},
        data () {
            return {
                'content':'',
                'converter':null
            }
        },
        watch:{
            'content':'contentChanged'
        },
        mounted(){ this.init(); },
        methods: {
            init(){
                var showdown  = require('showdown');
                var converter = new showdown.Converter();
                this.converter = converter;
            },
            contentChanged(){
                var html = this.converter.makeHtml(this.content);
                document.getElementById('show-content').innerHTML = html;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .thMarkDown {
        display: flex;
        justify-content: flex-start;
        textArea {
            padding: 10px 20px;
            width: 45%;
            height: 600px;
        }
        #show-content{
            margin-left: 20px;
            width: 45%;
            padding: 10px 25px;
            background: #fff;
        }
    }
</style>
