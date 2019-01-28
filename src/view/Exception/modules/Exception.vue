<template>
    <div class="thException">
        <div class="flexException">
            <img :src="img" />
            <div class="exceptionInfo">
                <p class="exceptionTitle">{{type}}</p>
                <p class="exceptionDesc">{{desc}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Exception",
        props: {
            img: {
                type: String,
            },
            type: {
                type: String,
                default: "404"
            },
            desc: {
                type: String,
                default: "404页面来蹭页面了~"
            }
        }
    }
</script>

<style lang="scss" scoped>
.thException {
    .flexException {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            width: 60%;
            height: 40%;
        }
        .exceptionInfo {
            margin-left: 20px;
            .exceptionTitle {
                padding: 10px 5px 5px 10px;
                font-size: 22px;
            }
            .exceptionDesc {
                padding: 2px 5px 5px 10px;
                font-size: 18px;
                color: firebrick;
            }
        }
    }
}
</style>
