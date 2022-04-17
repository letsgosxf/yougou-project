<template>
  <view>
    <view class="header-content">
      <ygHeader :headerTitle="title" :isBack="isBack"></ygHeader>
      <ygSearch></ygSearch>
    </view>
    <view class="main">
      <!-- 左侧导航 -->
      <view class="left">
        <!-- 数据优化 -->
        <view
          @click="changeCat(index)"
          v-for="(name, index) in catTitleList"
          :key="name"
          class="catItem"
        >
          <view :class="{ active: currentIndex === index }">
            {{ name }}
          </view>
        </view>
      </view>
      <!-- 右侧商品 -->
      <view class="right">
        <SubCat
          v-for="item in subCatList"
          :key="item.cat_id"
          :data="item"
        ></SubCat>
      </view>
    </view>
  </view>
</template>

<script>
let categoryList = [];
import SubCat from "./components/subCat.vue";
export default {
  components: {
    SubCat,
  },
  data() {
    return {
      title: "商品分类",
      isBack: false,
      catTitleList: [],
      subCatList: [],
      currentIndex: 0,
    };
  },
  /*   computed: {
    subCatList() {
      if (this.categoryList.length > 0) {
        return this.categoryList[this.currentIndex].children;
      } else {
        return [];
      }
    },
  }, */
  onLoad() {
    this.getCategory();
  },
  methods: {
    async getCategory() {
      const { message } = await this.$u.get("/categories");
      // 数据优化
      categoryList = message;
      this.catTitleList = categoryList.map((item) => item.cat_name);
      this.subCatList = categoryList[this.currentIndex].children;
    },
    changeCat(index) {
      this.currentIndex = index;
      this.subCatList = categoryList[this.currentIndex].children;
    },
  },
};
</script>

<style lang="scss" scoped>
.header-content {
  background-color: $theme-color;
}

.main {
  display: flex;
  height: 100vh;

  .left {
    flex: 1;
    overflow: auto;
    background: #f3f3f3;

    .catItem {
      font-size: 28rpx;
      color: #585858;
      text-align: center;
      padding: 18rpx 0;
    }

    .active {
      border-left: 6rpx solid $theme-color;
      border-right: 6rpx solid transparent;
      color: $theme-color;
      font-weight: bold;
    }
  }

  .right {
    flex: 3;
    height: 100%;
    overflow: auto;
  }
}
</style>
