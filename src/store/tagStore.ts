import createId from '@/lib/createId';
const localStorageKeyName = 'tagList';
const tagStore = {
   //tag store
   tagList: [] as Tag[],
   getTags() {
      this.tagList = JSON.parse(localStorage.getItem(localStorageKeyName) || '[]');
      return this.tagList;
   },
   saveTags(){
      localStorage.setItem(localStorageKeyName, JSON.stringify(this.tagList));
   },
   createTag(name: string){
      const names = this.tagList.map(item => item.name);
      if (names.indexOf(name) >= 0) {
         alert('不可添加重复标签');
         return 'duplicated';
      } else {
         const id = createId().toString();
         this.tagList.push({id: id, name: name});
         this.saveTags();
         return 'success';
      }
   },
   removeTag(id: string) {
      const idList = this.tagList.map(item => item.id);
      const index = idList.indexOf(id);
      this.tagList.splice(index, 1);
      this.saveTags();
      return true;
   },
   updateTag(id: string, name: string){
      const idList = this.tagList.map(item => item.id);
      if (idList.indexOf(id) >= 0) {
         const names = this.tagList.map(item => item.name);
         if (names.indexOf(name) >= 0) {
            return 'duplicated';
         } else {
            const tag = this.tagList.filter(item => item.id === id)[0];
            tag.name = name;
            this.saveTags();
            return 'success';
         }
      } else {
         return 'not found';
      }
   },
   findTag(id: string) {
      return this.tagList.filter(item => item.id === id)[0];
   },

};

tagStore.getTags();

export default tagStore;