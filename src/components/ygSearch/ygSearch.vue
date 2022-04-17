<template>
  <view class="my-search">
    <u-button :custom-style="customStyle" :hair-line="isHairLine"
      >搜&nbsp;索</u-button
    >
  </view>
</template>

<script>
export default {
  data() {
    return {
      customStyle: {
        width: "700rpx",
        height: "80rpx",
      },
      isHairLine: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.my-search {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100rpx;
  background-color: $theme-color;
}
</style>
