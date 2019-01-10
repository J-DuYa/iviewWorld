<template>
    <div>
        <Row>
            <Col :xs="24" :sm="24" :md="{ span: 7, offset: 1 }" :lg="{ span: 7, offset: 1 }">
                <TitleTip title="访问状态"></TitleTip>
                <ve-bar :data="chartData"></ve-bar>
            </Col>
            <Col :xs="24" :sm="24" :md="{ span: 7, offset: 1 }" :lg="{ span: 7, offset: 1 }">
                <TitleTip title="城市状态"></TitleTip>
                <ve-liquidfill :data="waterPoloData"></ve-liquidfill>
            </Col>
            <Col :xs="24" :sm="24" :md="{ span: 7, offset: 1 }" :lg="{ span: 7, offset: 1 }">
                <TitleTip title="乱词八糟"></TitleTip>
                <ve-wordcloud :data="wordData" :settings="wordSetting"></ve-wordcloud>
            </Col>
        </Row>
    </div>
</template>

<script>
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
        data() {
            this.wordSetting = {
                shape: 'diamond'
            };
            return {
                chartData: {
                    columns: ['日期', '访问用户', '下单用户', '下单率'],
                    rows: [
                        { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
                        { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
                        { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
                        { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
                        { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
                        { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
                    ]
                },
                waterPoloData: {
                    columns: ['city', 'percent'],
                    rows: [{
                        city: '南京',
                        percent: 0.6
                    }]
                },
                wordData: {
                    columns: ['word', 'count'],
                    rows: getRows()
                }
            }
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>
