<template>
    <div class="mb60">
        <MessageTip>
            在图表的世界了，你可以的随意的‘抽象’它，知道它能像人们展示你要表达的意思。
        </MessageTip>
        <Row>
            <Col :xs="18" :sm="18" :md="18" :lg="{ span: 11 }">
                <CommonCard class="mt20">
                    <ve-wordcloud :data="wordData" :settings="wordSetting"></ve-wordcloud>
                </CommonCard>
            </Col>
            <Col :xs="18" :sm="18" :md="18" :lg="{ span: 11, offset: 1 }">
                <CommonCard class="mt20">
                    <TPolyline></TPolyline>
                </CommonCard>
            </Col>
        </Row>
    </div>
</template>

<script>
    import TPolyline from '@/components/Polyline'
    import CommonCard from '@/components/CommonCard'
    function getRows () {
        return [{
            'word': '理想',
            'count': 22199
        }, {
            'word': '测试',
            'count': 10288
        }, {
            'word': '开发',
            'count': 620
        }, {
            'word': 'Javascript',
            'count': 274470
        }, {
            'word': 'web',
            'count': 12311
        }, {
            'word': 'python2',
            'count': 1206
        }, {
            'word': 'python3',
            'count': 4885
        }, {
            'word': 'html',
            'count': 32294
        }, {
            'word': 'java',
            'count': 18574
        }, {
            'word': 'css',
            'count': 38929
        }, {
            'word': 'scss',
            'count': 969
        }, {
            'word': 'less',
            'count': 37517
        }, {
            'word': 'sess',
            'count': 12053
        }, {
            'word': 'c',
            'count': 57299
        }, {
            'word': 'c++',
            'count': 15418
        }, {
            'word': 'c#',
            'count': 22905
        }, {
            'word': 'lua',
            'count': 5146
        }, {
            'word': 'code',
            'count': 49487
        }, {
            'word': '开发党',
            'count': 33837
        }, {
            'word': '程序猿',
            'count': 4500
        }, {
            'word': '攻城狮',
            'count': 5744
        }, {
            'word': '中国',
            'count': 4840
        }, {
            'word': '90后',
            'count': 232
        }, {
            'word': '正则表达式',
            'count': 3706
        }, {
            'word': '平面设计',
            'count': 4812
        }, {
            'word': '色彩搭配',
            'count': 16578
        }, {
            'word': 'ES6',
            'count': 76970
        }, {
            'word': 'ES7',
            'count': 6704
        }, {
            'word': '下雨天与巧克力更配👉',
            'count': 15964
        }, {
            'word': '😊',
            'count': 60679
        }, {
            'word': '😔',
            'count': 24347
        }, {
            'word': '😭',
            'count': 43420
        }, {
            'word': 'tool',
            'count': 25222
        }, {
            'word': 'webpack',
            'count': 16904
        }, {
            'word': '游戏开发',
            'count': 4029
        }]
    }
    export default {
        name: "Console",
        components: { TPolyline, CommonCard },
        data() {
            this.wordSetting = {
                shape: 'diamond'
            };
            return {
                wordData: {
                    columns: ['word', 'count'],
                    rows: getRows()
                },

            }
        },
        methods: {

        },
        created() {

        }
    }
</script>

<style scoped>

</style>
