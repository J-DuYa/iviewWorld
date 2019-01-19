<template>
    <div class="basicInfo mlr10">
        <MessageTip>
            个人信息<br>
            也许你不知道前途的道路有多的拥挤，但是你依旧要为你自己而战。---毒牙君
        </MessageTip>
        <div class="mt20">
            <Row>
                <Col :xs="24" :sm="24" :md="24" :lg="{ span: 8 }">
                    <PersonCard></PersonCard>
                </Col>
            </Row>
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
