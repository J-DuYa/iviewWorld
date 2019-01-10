<template>
    <div class="dashBroad">
        <ve-gauge
                :data="chartData"
                :settings="chartSettings">
        </ve-gauge>
    </div>
</template>

<script>
    export default {
        name: "Dashbroad",
        data() {
            this.chartSettings = {
                labelMap: {
                    'speed': '速度'
                },
                dataName: {
                    'speed': 'km/h'
                }
            };
            return {
                chartData: {
                    columns: ['type', 'value'],
                    rows: [
                        { type: 'speed', value: 60 }
                    ]
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.dashBroad {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #2c3e50;
    .ve-gauge {
        max-width: 100%!important;
        margin: 50% 0;
        margin-top: 200px;
        overflow: hidden;
    }
    div {
        width: 100%!important;
        canvas {
            width: 100%!important;
        }
    }

}
</style>
