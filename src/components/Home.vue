<template>
  <div class="home">
    <Button type="default" ghost @click="open">Default</Button>
    <Button type="primary" ghost>Primary</Button>
    <Button type="dashed" ghost>Dashed</Button>
    <Button type="text" ghost>Text</Button>
    <Button type="info" ghost>Info</Button>
    <Button type="success" ghost>Success</Button>
    <Button type="warning" ghost>Warning</Button>
    <Button type="error" ghost>Error</Button>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {
    getData() {
      ajax
        .get("/thirdWorld/hello")
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 测试iview的使用方法
    open() {
      this.$Notice.open({
        title: "正确提示",
        desc: '使用正确'
      });
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style scoped>
</style>
