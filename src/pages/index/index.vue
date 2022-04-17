<template>
  <view>
    <view class="header-content">
      <ygHeader :headerTitle="title" :isBack="isBack"></ygHeader>
      <ygSearch></ygSearch>
    </view>
    <view class="content">
      <!-- 轮播图 -->
      <u-swiper
        :list="swiperList"
        name="image_src"
        mode="dot"
        height="340"
        :effect3d="true"
      ></u-swiper>
      <!-- 导航 -->
      <view class="my_navbar">
        <ul>
          <li v-for="item in navbarList" :key="item.name">
            <image :src="item.image_src"></image>
          </li>
        </ul>
      </view>
      <!-- 楼层 -->
      <view class="fotter" v-for="(item, index) in footerData" :key="index">
        <view class="header_title">
          <image :src="item.floor_title.image_src" class="header_image"></image>
        </view>
        <view class="main">
          <view class="left">
            <img :src="item.product_list[0].image_src" class="left_image" />
          </view>
          <view class="right">
            <image
              v-for="ele in item.list"
              :key="ele.name"
              :src="ele.image_src"
              class="right_image"
            ></image>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: "黑马优购",
      isBack: false,
      swiperList: [],
      navbarList: [],
      footerData: [],
    };
  },
  onLoad() {
    this.getSwiperData();
    this.getNavbarData();
    this.getFooterData();
  },
  methods: {
    async getSwiperData() {
      const { message } = await this.$u.get("/home/swiperdata");
      this.swiperList = message;
    },
    async getNavbarData() {
      const { message } = await this.$u.get("/home/catitems");
      this.navbarList = message;
    },
    async getFooterData() {
      const { message } = await this.$u.get("/home/floordata");
      let newArr = [];
      for (let i = 0; i < message.length; i++) {
        newArr = message[i].product_list.filter((item, index) => {
          if (index > 0) return item;
        });
        message[i]["list"] = newArr;
      }
      this.footerData = message;
    },
  },
};
</script>

<style lang="scss" scoped>
.header-content {
  background-color: $theme-color;
}

.wrap {
  padding: 40rpx;
}

.my_navbar {
  margin: 20rpx 0;
  width: 100%;
  height: 140rpx;

  ul {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding-top: 12rpx;
      width: 128rpx;
      height: 140rpx;

      image {
        width: 100%;
        height: 100%;
      }
    }
  }
}

.fotter {
  width: 100%;
  height: 490rpx;

  .header_title {
    width: 100%;
    height: 60rpx;

    .header_image {
      width: 100%;
      height: 100%;
    }
  }

  .main {
    margin-bottom: 20rpx;
    display: flex;
    height: 410rpx;

    .left {
      flex: 1;
      margin: 0 15rpx;
      width: 232rpx;
      height: 100%;

      .left_image {
        width: 100%;
        height: 100%;
      }
    }

    .right {
      flex: 2;
      width: 100%;
      height: 410rpx;

      .right_image {
        margin-right: 10rpx;
        width: 230rpx;
        height: 202rpx;
      }
    }
  }
}
</style>
