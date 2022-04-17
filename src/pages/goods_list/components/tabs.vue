<template>
  <view class="tabs">
    <view
      v-for="(item, index) in list"
      :key="index"
      @click="changeIndex(index)"
      class="tab"
      >{{ item.name }}</view
    >
    <view
      class="underline"
      :class="{ middle: currentIndex === 1, right: currentIndex === 2 }"
    ></view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  methods: {
    changeIndex(index) {
      this.currentIndex = index;
      // 手动触发下拉刷新
      uni.startPullDownRefresh();
    },
  },
};
</script>

<style lang="scss" scoped>
.tabs {
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  height: 88rpx;
  font-size: 30rpx;
  line-height: 42rpx;
  color: #676767;

  .tab {
    padding: 23rpx 0;
    box-sizing: border-box;
    width: 184rpx;
    text-align: center;
    line-height: 1;
  }

  .underline {
    position: absolute;
    bottom: 0;
    left: 33rpx;
    width: 184rpx;
    height: 4rpx;
    background-color: $theme-color;
    transition: all 0.5s;

    &.middle {
      left: 283rpx;
    }

    &.right {
      left: 533rpx;
    }
  }
}
</style>
