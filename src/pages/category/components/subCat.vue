<template>
  <view class="subCatItem">
    <view class="title">/ {{ data.cat_name }} /</view>
    <view class="list">
      <navigator
        class="item"
        v-for="item in data.children"
        :key="item.cat_id"
        :url="`/pages/goods_list/goods_list?cid=${item.cat_id}`"
      >
        <u-image :src="item.cat_icon" width="120" height="120"></u-image>
        <view class="subTitle">{{ item.cat_name }}</view>
      </navigator>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 26rpx;
  color: #575757;
  text-align: center;
  margin-top: 18rpx;
}

.list {
  display: flex;
  flex-wrap: wrap;
  padding: 0 20rpx;

  .item {
    margin: 0 28rpx;

    .subTitle {
      text-align: center;
      font-size: 22rpx;
      color: #2e2e2e;
      margin-bottom: 8rpx;
    }
  }
}
</style>
