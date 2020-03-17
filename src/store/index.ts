import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';

Vue.use(Vuex);
//把 store 绑到 Vue.prototype上  Vue.prototype.$store = store
//这样我们使用Vue创建的实例就可以使用this.$store 相当于使用了store

const store = new Vuex.Store({
   state: {//相当于data
      recordList: [] as RecordItem[],

   },
   mutations: {//相当于methods
      getRecords(state) {
         state.recordList = JSON.parse(localStorage.getItem('recordList') || '[]') as RecordItem[];
      },
      saveRecords(state) {
         localStorage.setItem('recordList', JSON.stringify(state.recordList));
      },
      createRecord(state, record: RecordItem) {
         const recordClone: RecordItem = clone(record);
         recordClone.createdAt = new Date();
         state.recordList.push(recordClone);
         store.commit('saveRecords');
      },
   },
});

export default store;