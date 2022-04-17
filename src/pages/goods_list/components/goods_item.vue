<template>
  <navigator
    :url="`/pages/goods_detail/goods_detail?goods_id=${data.goods_id}`"
    class="goods-item"
  >
    <view class="goods-image">
      <u-image
        :src="data.goods_big_logo ? data.goods_big_logo : ''"
        width="191rpx"
        height="191rpx"
        mode="aspectFit"
        :lazy-load="islazyload"
      ></u-image>
    </view>
    <view class="goods-info">
      <view class="goods-title">
        {{ data.goods_name }}
      </view>
      <view class="goods-price">
        <span class="icon">￥</span>
        <span class="price">{{ data.goods_price }}</span>
      </view>
    </view>
  </navigator>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      islazyload: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.goods-item {
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 698rpx;
  height: 209rpx;

  .goods-image {
    width: 191rpx;
    height: 191rpx;
  }

  .goods-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    padding: 26rpx 26rpx 27rpx 29rpx;
    height: 100%;

    .goods-title {
      color: #434343;
      font-size: 24rpx;
      line-height: 33rpx;
    }

    .goods-price {
      color: $theme-color;
      font-weight: bold;

      .icon {
        width: 11rpx;
        height: 25rpx;
        font-size: 18rpx;
      }

      .price {
        line-height: 33rpx;
        font-size: 24rpx;
      }
    }
  }
}
</style>
