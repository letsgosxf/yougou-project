<template>
  <view class="navigation">
    <view class="left">
      <view class="item">
        <u-icon name="server-fill" :size="40" color="#707070"></u-icon>
        <view class="text u-line-1">客服</view>
      </view>
      <view class="item car">
        <u-badge
          class="car-num"
          :count="9"
          type="error"
          :offset="[-3, -6]"
        ></u-badge>
        <u-icon name="shopping-cart" :size="40" color="#707070"></u-icon>
        <view class="text u-line-1">购物车</view>
      </view>
    </view>
    <view class="right">
      <view class="cart btn u-line-1" @click="$emit('addCart')"
        >加入购物车</view
      >
      <view class="buy btn u-line-1">立即购买</view>
    </view>
  </view>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navigation {
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 16rpx 0;
  margin-top: 100rpx;
  width: 100%;
  border: 2rpx solid #f2f2f2;
  background-color: #ffffff;

  .left {
    display: flex;
    font-size: 20rpx;

    .item {
      margin: 0 30rpx;

      &.car {
        text-align: center;
        position: relative;

        .car-num {
          position: absolute;
          top: -10rpx;
          right: -10rpx;
        }
      }
    }
  }
  .right {
    display: flex;
    font-size: 28rpx;
    align-items: center;

    .btn {
      line-height: 66rpx;
      padding: 0 40rpx;
      border-radius: 36rpx;
      color: #ffffff;
    }

    .cart {
      background-color: #ed3f14;
      margin-right: 30rpx;
    }

    .buy {
      background-color: #ff7900;
    }
  }
}
</style>
