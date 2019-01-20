<template>
    <div class="t_personCard">
        <Card :class="personCardClass">
            <div class="t_personCard_header">
                <div slot="header" class="box-card-header">
                    <img :src="$store.getters.basicInfo.cardBg">
                </div>
                <h3>天行健，君子已自强不息；地势坤，君子以厚德载物。</h3>
            </div>
            <div class="t_personCard_body pd10">
                <img :src="$store.getters.basicInfo.headImg">
                <div class="skill_intr mb10">
                    <span>Css</span>
                    <Progress :percent="100" />
                </div>
                <div class="skill_intr mb10">
                    <span>Javascript</span>
                    <Progress :percent="70" status="active" />
                </div>
                <div class="skill_intr mb10">
                    <span>Vue</span>
                    <Progress :percent="65" status="active" />
                </div>
                <div class="skill_intr mb10">
                    <span>Angular</span>
                    <Progress :percent="65" status="active" />
                </div>
                <div class="skill_intr mb10">
                    <span>React</span>
                    <Progress :percent="60" status="wrong" />
                </div>
            </div>
        </Card>
    </div>
</template>

<script>
    const prefixCls = 'th_world';

    export default {
        name: "PersonCard",
        data() {
            return {

            }
        },
        computed: {
            personCardClass() {
                return [
                    `${prefixCls}`,
                    `${prefixCls}-` + 'header'
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
