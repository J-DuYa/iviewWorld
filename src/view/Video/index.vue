<template>
    <div class="t_video">
        <MessageTip>
            视频空间<br>
            视频的享受来源于心灵，请善待自己的心灵。
        </MessageTip>
        <div class="container mt20">
            <div class="player">
                <video-player
                        class="video-player vjs-custom-skin"
                       ref="videoPlayer"
                       :playsinline="true"
                       :options="playerOptions"
                       @play="onPlayerPlay($event)"
                       @pause="onPlayerPause($event)">
                </video-player>
            </div>
        </div>
    </div>
</template>

<script>
    import { videoPlayer } from 'vue-video-player';
    export default {
        name: 'Video',
        data () {
            return {
                playerOptions: {
                    playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
                    autoplay: false, //如果true,浏览器准备好时开始回放。
                    muted: false, // 默认情况下将会消除任何音频。
                    loop: false, // 导致视频一结束就重新开始。
                    preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                    language: 'zh-CN',
                    aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                    fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                    sources: [{
                        type: "video/mp4",
                        src: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" //你的视频地址（必填）
                    }],
                    poster: "poster.jpg", //你的封面地址
                    width: document.documentElement.clientWidth,
                    notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                    controlBar: {
                     timeDivider: true,
                     durationDisplay: true,
                     remainingTimeDisplay: false,
                     fullscreenToggle: true  //全屏按钮
                    }
                }
            }
        },
        components: {
            videoPlayer
        },
        methods: {
            onPlayerPlay(player) {

            },
            onPlayerPause(player){

            },
        },
        computed: {
            player() {
                return this.$refs.videoPlayer.player
            }
        }
    }
</script>

<style type="scss" scoped>
    .t_video {
        margin: 0 auto;
        min-width: 300px;
        max-width: 998px;
        .container {
            background-color: #efefef;
            min-height: 100%;
        }
    }
</style>
