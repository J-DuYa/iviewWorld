<template>
    <div class="basicInfo mlr10">
        <MessageTip>
            个人信息<br>
            也许你不知道前途的道路有多的拥挤，但是你依旧要为你自己而战。---毒牙君
        </MessageTip>
        <div>
            <Row>
                <Col :xs="24" :sm="24" :md="24" :lg="{ span: 7 }"class="mt20">
                    <PersonCard></PersonCard>
                </Col>
                <Col :xs="24" :sm="24" :md="24" :lg="{ span: 8 }" class="mt20">
                    <MessageAlert
                            :isHasInfoIcon="true"
                            tipMessage="这里上传个人头像"
                            type="purple">
                        上传头像
                    </MessageAlert>
                       <div class="t_flex_row mt20">
                           <vueCropper
                                   :autoCrop="true"
                                   :info="true"
                                   :full="false"
                                   outputType="png"
                                   ref="cropper"
                                   autoCropWidth="160"
                                   autoCropHeight="160"
                                   :img="option.image"
                           >
                           </vueCropper>
                           <div class="mlr30">
                               <div class="changeImage">
                                   <label class="btn" for="uploads">选择图片</label>
                                   <input type="file" ref="uploads" id="uploads" style="position:absolute; clip:rect(0 0 0 0);" accept="image/png, image/jpeg, image/gif, image/jpg" @change="setImage($event, 1, 'cropper')">
                               </div>
                               <Row>
                                   <Col :span="12">
                                       <Button type="info" @click="changeScale(1, 'cropper')" class="mt10">放大</Button>
                                   </Col>
                                   <Col :span="12">
                                       <Button type="primary" @click="changeScale(-1, 'cropper')" class="mt10">缩小</Button>
                                   </Col>
                               </Row>
                               <Row>
                                   <Col :span="12">
                                       <Button type="primary" @click="rotateLeft('cropper')" class="mt10">左旋转</Button>
                                   </Col>
                                   <Col :span="12">
                                       <Button type="info" @click="rotateRight('cropper')" class="mt10">右旋转</Button>
                                   </Col>
                               </Row>
                               <Row>
                                   <Col :span="24">
                                       <Button type="warning" @click="downImg('cropper')" class="mt10">下载</Button>
                                   </Col>
                               </Row>
                               <Row>
                                   <Col :span="24">
                                       <Button type="success" @click="changeHeadImg('cropper')" class="mt10">上传图片</Button>
                                   </Col>
                               </Row>
                           </div>
                       </div>
                </Col>
            </Row>
        </div>
    </div>
</template>

<script>
    export default {
        name: "basicInfo",
        data() {
            return {
                basicCard: {
                    title: '基础信息',
                },
                // cropper
                previews: {

                },
                option: {
                    image: this.$store.getters.basicInfo.headImg,
                    bgImage: this.$store.getters.basicInfo.cardBg
                },
            }
        },
        methods: {
            changeHeadImg(type) {
                switch (type) {
                    case 'cropper':
                        this.$refs.cropper.getCropData(data => {
                            this.$store.dispatch('changeHeadImg', data)
                        })
                        break;
                    case 'opCropper':
                        this.$refs.opCropper.getCropData(data => {
                            this.$store.dispatch('changeHeadBg', data)
                        })
                        break;
                    default:
                        break;
                }

            },
            setImage(e, num, type) {
                var file = e.target.files[0]
                this.fileUpload = file
                if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
                    this.$Message.warning('图片类型必须是.gif,jpeg,jpg,png,bmp中的一种')
                    return false
                }
                var reader = new FileReader();
                reader.onload = (e) => {
                    let data;
                    if (typeof e.target.result === 'object') {
                        // 把Array Buffer转化为blob 如果是base64不需要
                        data = window.URL.createObjectURL(new Blob([e.target.result]))
                    } else {
                        data = e.target.result
                    }
                    switch (type) {
                        case 'cropper':
                            this.option.image = data
                            this.$refs['uploads'].value = ''
                            break;
                        case 'opCropper':
                            this.option.bgImage = data
                            this.$refs['opUploads'].value = ''
                            break;
                        default:
                            break;
                    }

                }
                // 转化为base64
                reader.readAsDataURL(file)
                // 转化为blob
                // reader.readAsArrayBuffer(file)
            },
            // 放大缩小
            changeScale(num, type) {
                num = num || 1;
                this.$refs[type].changeScale(num);
            },
            // 左旋转
            rotateLeft(type) {
                this.$refs[type].rotateLeft();
            },
            // 右旋转
            rotateRight(type) {
                this.$refs[type].rotateRight();
            },
            // 下载
            downImg(type, cropper) {
                let aLink = document.createElement('a');
                // 获取当前事件
                let currentDate = new Date().getTime();
                aLink.download = 'th_world' + currentDate;
                if (type === 'blob') {
                    this.$refs[cropper].getCropBlob((data) => {
                        aLink.href = window.URL.createObjectURL(data)
                        aLink.click()
                    })
                } else {
                    try {
                        this.$refs[cropper].getCropData((data) => {
                            aLink.href = data;
                            aLink.click()
                        })
                    } catch (e) {
                        this.$Message.error('对方不想跟你说话，并向你抛了一个异常！');
                    }
                }
            },
        }
    }
</script>

<style lang="scss">
    .basicInfo {
        .vue-cropper {
            height: 300px!important;
            width: 300px!important;
            .cropper-modal {
                background: url("");
            }
        }
        .changeImage {
            margin-top: 10px;
            height: 40px;
            width: 162px;
            line-height: 40px;
            text-align: center;
            font-size: 12px;
            color: #fff;
            background: #EE9572;
            border-color: #EE9572;
            border-radius: 4px;
        }
        .ivu-btn {
            margin-left: 5%;
            width: 90%;
        }
    }
</style>
