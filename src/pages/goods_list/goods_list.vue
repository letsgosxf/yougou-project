<template>
  <view class="container">
    <u-toast ref="uToast" />
    <!-- 头部 -->
    <view class="header-content">
      <ygHeader :headerTitle="title" :isBack="isBack"></ygHeader>
      <ygSearch></ygSearch>
    </view>
    <!-- 导航栏 -->
    <Tabs :list="list"></Tabs>
    <!-- 商品列表 -->
    <GoodsItem
      v-for="item in goodsList"
      :key="item.goods_id"
      :data="item"
    ></GoodsItem>
  </view>
</template>

<script>
import Tabs from "./components/tabs";
import GoodsItem from "./components/goods_item";

let pageConfig = {
  query: "",
  cid: "",
  pagenum: 1,
  pagesize: 10,
};
let isFinished = false;
export default {
  components: { Tabs, GoodsItem },
  data() {
    return {
      title: "商品列表",
      isBack: true,
      list: [{ name: "综合" }, { name: "销量" }, { name: "价格" }],
      goodsList: [],
    };
  },
  onLoad(option) {
    pageConfig = {
      query: "",
      cid: "",
      pagenum: 1,
      pagesize: 10,
    };
    pageConfig.cid = option.cid;
    this.getGoodsList();
  },
  // 上拉到底触发函数
  onReachBottom() {
    if (isFinished) {
      this.showToast();
      return;
    }
    pageConfig.pagenum++;
    this.getGoodsList();
  },
  // 下拉刷新触发函数
  async onPullDownRefresh() {
    this.goodsList = [];
    pageConfig.pagenum = 1;
    await this.getGoodsList();
    uni.stopPullDownRefresh();
  },
  methods: {
    async getGoodsList() {
      const { message } = await this.$u.get("/goods/search", pageConfig);
      // 处理数据，每次加载合并数据
      this.goodsList = [...this.goodsList, ...message.goods];
      if (pageConfig.pagesize > message.goods.length) {
        isFinished = true;
      }
    },
    showToast() {
      this.$refs.uToast.show({
        title: "已经到底了~",
        type: "warning",
      });
      isFinished = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.header-content {
  background-color: $theme-color;
}
</style>
