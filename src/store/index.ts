import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
//把 store 绑到 Vue.prototype上  Vue.prototype.$store = store
//这样我们使用Vue创建的实例就可以使用this.$store 相当于使用了store

const store = new Vuex.Store({
   state: {//相当于data
      count: 0
   },
   mutations: {//相当于methods
      increment(state) {
         state.count += 1;
      }
   },
});
store.commit('increment');//通过commit调用increment方法
console.log(store.state.count);

export default store;