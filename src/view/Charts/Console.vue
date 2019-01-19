<template>
    <div class="mb60">
        <MessageTip>
            在图表的世界了，你可以的随意的‘抽象’它，知道它能像人们展示你要表达的意思。
        </MessageTip>
        <Row>
            <Col :xs="24" :sm="24" :md="24" :lg="{ span: 8 }">
                <MessageAlert
                        class="mt20"
                        :isHasInfoIcon="true"
                        tipMessage="这是一个描述个人兴趣的字词图">
                    乱词八糟
                </MessageAlert>
                <ve-wordcloud :data="wordData" :settings="wordSetting"></ve-wordcloud>
            </Col>
            <Col :xs="24" :sm="24" :md="24" :lg="{ span: 8, offset: 1 }">
                <MessageAlert
                        class="mt20"
                        :isHasInfoIcon="true"
                        tipMessage="这是一个k线图">
                    k线图
                </MessageAlert>
                <ve-candle :data="kData"></ve-candle>
            </Col>
            <Col :xs="24" :sm="24" :md="24" :lg="{ span: 8 }">
                <PersonCard class="mt20"></PersonCard>
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
                kData: {
                    columns: ['日期', 'open', 'close', 'lowest', 'highest', 'vol'],
                    rows: [
                        { '日期': '2004-01-05', open: 10411.85, close: 10544.07, lowest: 10411.85, highest: 10575.92, vol: 221290000 },
                        { '日期': '2004-01-06', open: 10543.85, close: 10538.66, lowest: 10454.37, highest: 10584.07, vol: 191460000 },
                        { '日期': '2004-01-07', open: 10535.46, close: 10529.03, lowest: 10432.12, highest: 10587.55, vol: 225490000 },
                        { '日期': '2004-01-08', open: 10530.07, close: 10592.44, lowest: 10480.59, highest: 10651.99, vol: 237770000 },
                        { '日期': '2004-01-09', open: 10589.25, close: 10458.89, lowest: 10420.52, highest: 10603.48, vol: 223250000 },
                        { '日期': '2004-01-12', open: 10461.55, close: 10485.18, lowest: 10389.85, highest: 10543.03, vol: 197960000 },
                        { '日期': '2004-01-13', open: 10485.18, close: 10427.18, lowest: 10341.19, highest: 10539.25, vol: 197310000 },
                        { '日期': '2004-01-14', open: 10428.67, close: 10538.37, lowest: 10426.89, highest: 10573.85, vol: 186280000 },
                        { '日期': '2004-01-15', open: 10534.52, close: 10553.85, lowest: 10454.52, highest: 10639.03, vol: 260090000 },
                        { '日期': '2004-01-16', open: 10556.37, close: 10600.51, lowest: 10503.71, highest: 10666.88, vol: 254170000 },
                        { '日期': '2004-01-20', open: 10601.42, close: 10528.66, lowest: 10447.92, highest: 10676.96, vol: 224300000 },
                        { '日期': '2004-01-21', open: 10522.77, close: 10623.62, lowest: 10453.11, highest: 10665.72, vol: 214920000 },
                        { '日期': '2004-01-22', open: 10624.22, close: 10623.18, lowest: 10545.03, highest: 10717.41, vol: 219720000 },
                        { '日期': '2004-01-23', open: 10625.25, close: 10568.29, lowest: 10490.14, highest: 10691.77, vol: 234260000 },
                        { '日期': '2004-01-26', open: 10568.12, close: 10702.51, lowest: 10510.44, highest: 10725.18, vol: 186170000 },
                        { '日期': '2004-01-27', open: 10701.11, close: 10609.92, lowest: 10579.33, highest: 10748.81, vol: 206560000 },
                        { '日期': '2004-01-28', open: 10610.07, close: 10468.37, lowest: 10412.44, highest: 10703.25, vol: 247660000 },
                        { '日期': '2004-01-29', open: 10467.41, close: 10510.29, lowest: 10369.92, highest: 10611.56, vol: 273970000 },
                        { '日期': '2004-01-30', open: 10510.22, close: 10488.07, lowest: 10385.56, highest: 10551.03, vol: 208990000 },
                        { '日期': '2004-02-02', open: 10487.78, close: 10499.18, lowest: 10395.55, highest: 10614.44, vol: 224800000 },
                        { '日期': '2004-02-03', open: 10499.48, close: 10505.18, lowest: 10414.15, highest: 10571.48, vol: 183810000 },
                        { '日期': '2004-02-04', open: 10503.11, close: 10470.74, lowest: 10394.81, highest: 10567.85, vol: 227760000 },
                        { '日期': '2004-02-05', open: 10469.33, close: 10495.55, lowest: 10399.92, highest: 10566.37, vol: 187810000 },
                        { '日期': '2004-02-06', open: 10494.89, close: 10593.03, lowest: 10433.74, highest: 10634.81, vol: 182880000 },
                        { '日期': '2004-02-09', open: 10592.41, close: 10579.03, lowest: 10433.72, highest: 10634.81, vol: 160720000 },
                        { '日期': '2004-02-10', open: 10578.74, close: 10613.85, lowest: 10511.18, highest: 10667.03, vol: 160590000 },
                        { '日期': '2004-02-11', open: 10605.48, close: 10737.72, lowest: 10561.55, highest: 10779.41, vol: 277850000 },
                        { '日期': '2004-02-12', open: 10735.18, close: 10694.07, lowest: 10636.44, highest: 10775.03, vol: 197560000 },
                        { '日期': '2004-02-13', open: 10696.22, close: 10627.85, lowest: 10578.66, highest: 10755.47, vol: 208340000 },
                        { '日期': '2004-02-17', open: 10628.88, close: 10714.88, lowest: 10628.88, highest: 10762.07, vol: 169730000 },
                        { '日期': '2004-02-18', open: 10706.68, close: 10671.99, lowest: 10623.62, highest: 10764.36, vol: 164370000 },
                        { '日期': '2004-02-19', open: 10674.59, close: 10664.73, lowest: 10626.44, highest: 10794.95, vol: 219890000 },
                        { '日期': '2004-02-20', open: 10666.29, close: 10619.03, lowest: 10559.11, highest: 10722.77, vol: 220560000 },
                        { '日期': '2004-02-23', open: 10619.55, close: 10609.62, lowest: 10508.89, highest: 10711.84, vol: 229950000 },
                        { '日期': '2004-02-24', open: 10609.55, close: 10566.37, lowest: 10479.33, highest: 10681.41, vol: 225670000 },
                        { '日期': '2004-02-25', open: 10566.59, close: 10601.62, lowest: 10509.42, highest: 10660.73, vol: 192420000 },
                        { '日期': '2004-02-26', open: 10598.14, close: 10580.14, lowest: 10493.71, highest: 10652.96, vol: 223230000 },
                        { '日期': '2004-02-27', open: 10581.55, close: 10583.92, lowest: 10519.03, highest: 10689.55, vol: 200050000 }
                    ]
                },
                wordData: {
                    columns: ['word', 'count'],
                    rows: getRows()
                },

            }
        },
        methods: {

        },
        created() {
            console.log("触发")
        }
    }
</script>

<style scoped>

</style>
