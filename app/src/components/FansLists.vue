<template>
<router-link :to="'/otherUsers/' + userid">
  <div class="fans">
    <div class="fanslist">
        <img :src="imgUrl+userimg" alt=""  class="por">
      <div class="username">{{username}}</div>
    </div>
  </div>
</router-link>
</template>

<script>
export default {
  name: "fans",
  props: ['username',"userimg","userid"],
  data () {
    return {
      imgUrl: ""
    }
  },
  created() {
    this.imgUrl = this.$store.state.imgUrl;
  }
};
</script>

<style lang="less" scoped>
@import "../assets/style/base.less";

.fanslist {
  width: 710px;
  height: 100px;
  background: rgb(248, 248, 248);
  margin: 10px auto;
  display: flex;
  align-items: center;
  border-radius: 20px;
   box-shadow: 0 0 6px rgb(245, 179, 190);
  .por {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 1px solid red;
    margin-left: 20px;
    margin-right: 20px;
  }
  .username {
    font-size: 50px;
  }
}
</style>