import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';
import tagListModel from '@/models/tagListModel';
import recordListModel from '@/models/recordListModel';

Vue.config.productionTip = false;

Vue.component('Nav', Nav);
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);

//tag store
window.tagList = tagListModel.getData();
window.createTag = (name: string) => {
   const message = tagListModel.create(name);
   if (message === 'duplicated') {
      alert('不可添加重复标签');
   } else {
      return;
   }
};
window.removeTag = (id: string) => {
   return tagListModel.removeData(id);
};
window.updateTag = (id: string, name: string) => {
   return tagListModel.updateData(id, name);
};
window.findTag = (id: string) => {
  return  window.tagList.filter(item => item.id === id)[0];
};

//record store
window.recordList = recordListModel.getData();
window.createRecord = (record: RecordItem)=>{
   recordListModel.create(record);
};

new Vue({
   router,
   store,
   render: h => h(App)
}).$mount('#app');
