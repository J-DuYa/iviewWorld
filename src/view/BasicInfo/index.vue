<template>
    <div class="basicInfo mlr10">
        <TitleTip title="个人信息"></TitleTip>
        <div class="mt20">
            <!-- 头像 -->
            <HeadCard :data="basicCard">
                <Row>
                    <Col :xs="24" :sm="24" :md="24" :lg="24" class="text-center">
                        <img :src="basicCard.headImage" class="th_main_headerImg">
                    </Col>
                    <Col :xs="24" :sm="24" :md="24" :lg="24" class="text-center mt10">
                        <div>代号：9567</div>
                    </Col>
                    <Col :xs="24" :sm="24" :md="24" :lg="24" class="text-center mt10">
                        <div>标签：
                            <Tag color="default">游戏</Tag>
                            <Tag color="primary">code</Tag>
                            <Tag color="success">睡觉</Tag>
                            <Tag color="error">做梦</Tag>

                        </div>
                    </Col>
                </Row>
            </HeadCard>
        </div>
    </div>
</template>

<script>
    import headImage from '@/assets/images/github/github.jpg'
    export default {
        name: "basicInfo",
        data() {
            return {
                basicCard: {
                    title: '基础信息',
                    headImage: headImage
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
