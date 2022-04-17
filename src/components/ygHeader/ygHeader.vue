<template>
  <u-navbar
    :is-back="isBack"
    back-icon-color="#fff"
    :title="headerTitle"
    :title-size="titleSize"
    :title-color="titleColor"
    :background="background"
    :border-bottom="false"
  ></u-navbar>
</template>

<script>
export default {
  props: {
    headerTitle: {
      type: String,
      require: true,
    },
    isBack: {
      type: Boolean,
    },
  },
  data() {
    return {
      background: {
        backgroundColor: "#eb4450",
      },
      titleSize: 32,
      titleColor: "#fceeef",
    };
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss"></style>
