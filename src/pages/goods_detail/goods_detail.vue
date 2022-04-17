<template>
  <view>
    <view class="header-content">
      <ygHeader :headerTitle="title" :isBack="isBack"></ygHeader>
    </view>
    <!-- 轮播图 -->
    <view class="wrap">
      <u-swiper :list="list" :height="497" mode="dot"></u-swiper>
    </view>
    <!-- 商品详情 -->
    <view class="goods-detail">
      <view class="goods-top">
        <view class="goods-price">
          <span class="goods-icon">￥</span>
          <span class="goods-number">39999</span>
        </view>
        <view class="goods-share">
          <u-icon name="zhuanfa" color="#707070" size="36"></u-icon>
          <u-icon name="star" color="#707070" size="36"></u-icon>
        </view>
      </view>
      <view class="goods-bottom">
        国产贵妃柑1kg 新鲜水果 柑橘 橘子 国产贵妃柑1kg 新鲜水果 柑橘
        橘子国产贵妃柑1kg 新鲜水果 柑…
      </view>
    </view>
  </view>
</template>

<script>
let params = {
  goods_id: "",
};
export default {
  data() {
    return {
      title: "商品详情",
      isBack: true,
      swiperList: [],
    };
  },
  computed: {
    list() {
      return this.swiperList
        ? this.swiperList.map((item) => {
            return { image: item.pics_big_url };
          })
        : [];
    },
  },
  onLoad(option) {
    params.goods_id = option.goods_id;
    // 获取数据
    this.getgoodsDetail();
  },
  methods: {
    async getgoodsDetail() {
      const { message } = await this.$u.get("/goods/detail", params);
      this.swiperList = message.pics;
    },
  },
};
</script>

<style lang="scss" scoped>
.header-content {
  background-color: $theme-color;
}

.wrap {
  margin: 0 auto;
  width: 497rpx;
  height: 497rpx;

  ::v-deep {
    .u-indicator-item-dot {
      width: 18rpx;
      height: 18rpx;
      background-color: rgba($color: #000000, $alpha: 0.3);
    }

    .u-indicator-item-dot-active {
      width: 18rpx;
      height: 18rpx;
      background-color: $theme-color;
    }
  }
}

.goods-detail {
  padding: 20rpx 36rpx 48rpx 33rpx;
  width: 100%;
  height: 220rpx;

  .goods-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20rpx;
    height: 50rpx;
    line-height: 1;

    .goods-price {
      color: $theme-color;
      font-weight: bold;

      .goods-icon {
        width: 11rpx;
        height: 25rpx;
        font-size: 18rpx;
      }

      .goods-number {
        line-height: 33rpx;
        font-size: 24rpx;
      }
    }

    .goods-share {
      ::v-deep.uicon-star {
        margin-left: 46rpx;
      }
    }
  }

  .goods-bottom {
    color: #434343;
    font-size: 30rpx;
    line-height: 42rpx;
  }
}
</style>
