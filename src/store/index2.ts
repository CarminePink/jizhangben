import tagListModel from '@/models/tagListModel';
import recordListModel from '@/models/recordListModel';

const store = {
   //tag store
   tagList: tagListModel.getData(),
   createTag: (name: string) => {
      const message = tagListModel.create(name);
      if (message === 'duplicated') {
         alert('不可添加重复标签');
      } else {
         return;
      }
   },
   removeTag: (id: string) => {
      return tagListModel.removeData(id);
   },
   updateTag: (id: string, name: string) => {
      return tagListModel.updateData(id, name);
   },
   findTag: (id: string) => {
      return store.tagList.filter(item => item.id === id)[0];
   },

   //record store
   recordList: recordListModel.getData(),
   createRecord: (record: RecordItem) => {
      recordListModel.create(record);
   },
};

export default store;