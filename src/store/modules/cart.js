const state = {
  goodsList: [],
};
const mutations = {
  addGoods(state, goodsData) {
    const index = state.goodsList.findIndex(
      (item) => Number(item.goods_id) === Number(goodsData.goods_id)
    );
    if (index === -1) {
      // 新增数据对象
      state.goodsList.push(goodsData);
    } else {
      // 数量+1
      state.goodsList = state.goodsList.map((item, i) => {
        if (index === i) item.number++;
        return item;
      });
    }
  },
};
const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
