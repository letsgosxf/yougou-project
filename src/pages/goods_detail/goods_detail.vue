<template>
  <view v-if="detail.goods_name">
    <view class="header-content">
      <ygHeader :headerTitle="title" :isBack="isBack"></ygHeader>
    </view>
    <!-- 轮播图 -->
    <view class="wrap">
      <u-swiper
        :list="list"
        :height="497"
        mode="dot"
        img-mode="aspectFill"
        @click="previewImage"
      ></u-swiper>
    </view>
    <!-- 商品详情 -->
    <view class="goods-detail">
      <view class="goods-top">
        <view class="goods-price">
          <span class="goods-icon">￥</span>
          <span class="goods-number">{{ detail.goods_price }}</span>
        </view>
        <view class="goods-share">
          <u-icon name="zhuanfa" color="#707070" size="36"></u-icon>
          <u-icon name="star" color="#707070" size="36"></u-icon>
        </view>
      </view>
      <view class="goods-bottom">
        {{ detail.goods_name }}
      </view>
    </view>
    <!-- 分隔线 -->
    <view class="divider"></view>
    <!-- 富文本内容 -->
    <u-parse
      v-if="lazyloadImage.length > 0"
      :html="detail.goods_introduce"
      :selectable="true"
      :lazy-load="true"
      :loading-img="lazyloadImage"
      :show-with-animation="true"
    ></u-parse>
    <!-- 底部组件 -->
    <SubmitBar @addCart="addCart" />
  </view>
</template>

<script>
import SubmitBar from "./components/submit_bar";
let params = {
  goods_id: "",
};
export default {
  components: {
    SubmitBar,
  },
  data() {
    return {
      title: "商品详情",
      isBack: true,
      lazyloadImage:
        "https://www.google.com.hk/url?sa=i&url=http%3A%2F%2F616pic.com%2Ftupian%2Fjiazaizhong.html&psig=AOvVaw0TLpSGJ-FNxn5dL-WfdEYZ&ust=1650349878944000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCJiO5cb-nPcCFQAAAAAdAAAAABAD",
      detail: {},
      swiperList: [],
      cart: [],
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
    params.goods_id = option.goods_id || 9832;
    // 获取数据
    this.getgoodsDetail();
  },
  methods: {
    async getgoodsDetail() {
      const { message } = await this.$u.get("/goods/detail", params);
      this.detail = message;
      this.swiperList = message.pics;
    },
    // 轮播图 图片 预览
    previewImage(index) {
      uni.previewImage({
        current: index,
        urls: this.swiperList.map((item) => item.pics_big_url),
        indicator: "number",
      });
    },
    addCart() {
      const index = this.cart.findIndex(
        (item) => item.goods_id === Number(params.goods_id)
      );
      if (index === -1) {
        this.cart.push({
          goods_id: this.detail.goods_id,
          goods_name: this.detail.goods_name,
          goods_price: this.detail.goods_price,
          number: 1,
          pics: this.detail.pics[0].pics_sma_url,
        });
      } else {
        this.cart = this.cart.map((ele, i) => {
          if (i === index) {
            ele.number++;
          }
          return ele;
        });
      }
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
  width: 100%;
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
        font-size: 24rpx;
      }

      .goods-number {
        line-height: 33rpx;
        font-size: 30rpx;
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
    font-weight: bold;
    line-height: 42rpx;
  }
}

.divider {
  width: 100%;
  height: 20rpx;
  background-color: #f9f9f9;
}
</style>
