import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';
import createId from '@/lib/createId';
import router from '@/router';

Vue.use(Vuex);
//把 store 绑到 Vue.prototype上  Vue.prototype.$store = store
//这样我们使用Vue创建的实例就可以使用this.$store 相当于使用了store

type RootState = {
   recordList: RecordItem[];
   tagList: Tag[];
   currentTag?: Tag;
}

const store = new Vuex.Store({
   state: {//相当于data
      recordList: [],
      tagList: [],
      currentTag: undefined,
   } as RootState,
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

      getTags(state) {
         state.tagList = JSON.parse(localStorage.getItem('tagList') || '[]');
      },
      saveTags(state) {
         localStorage.setItem('tagList', JSON.stringify(state.tagList));
      },
      createTag(state, name: string) {
         const names = state.tagList.map(item => item.name);
         if (names.indexOf(name) >= 0) {
            alert('不可添加重复标签');
         } else {
            const id = createId().toString();
            state.tagList.push({id: id, name: name});
            store.commit('saveTags');
         }
      },
      updateTag(state, payload: { id: string; name: string }) {
         const {id, name} = payload;
         const idList = state.tagList.map(item => item.id);
         if (idList.indexOf(id) >= 0) {
            const names = state.tagList.map(item => item.name);
            if (names.indexOf(name) >= 0) {
               window.alert('请不要设置重复的标签名');
            } else {
               const tag = state.tagList.filter(item => item.id === id)[0];
               tag.name = name;
               store.commit('saveTags');
            }
         } else {
            return 'not found';
         }
      },
      removeTag(state, id: string) {
         const idList = state.tagList.map(item => item.id);
         const index = idList.indexOf(id);
         if (index >= 0) {
            state.tagList.splice(index, 1);
            store.commit('saveTags');
            router.back();
         } else {
            window.alert('删除失败');
         }
      },
      setCurrentTag(state, id: string) {
         state.currentTag = state.tagList.filter(item => item.id === id)[0];
      }
   },
});

export default store;