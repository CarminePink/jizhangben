const localStorageKeyName = 'tagList';
type Tag = {
   id: string;
   name: string;
}
type TagListModel = {
   data: Tag[];
   getData: () => Tag[];
   create: (name: string) => string;
   updateData: (id: string, name: string) => 'success' | 'not found' | 'duplicated';
   removeData: (id: string) => 'success';
   saveData: () => void;
}

const tagListModel: TagListModel = {
   data: [],
   getData() {
      this.data = JSON.parse(localStorage.getItem(localStorageKeyName) || '[]');
      return this.data;
   },
   updateData(id, name) {
      const idList = this.data.map(item => item.id);
      if (idList.indexOf(id) >= 0) {
         const names = this.data.map(item => item.name);
         if (names.indexOf(name) >= 0) {
            return 'duplicated';
         } else {
            const tag = this.data.filter(item => item.id === id)[0];
            tag.id = name;
            tag.name = name;
            this.saveData();
            return 'success';
         }
      } else {
         return 'not found';
      }
   },
   removeData(id: string) {
      const idList = this.data.map(item => item.id);
      const index = idList.indexOf(id);
      this.data.splice(index, 1);
      this.saveData();
      return 'success';
   },
   saveData() {
      localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
   },
   create(name) {
      const names = this.data.map(item => item.name);
      if (names.indexOf(name) >= 0) {
         return 'duplicated';
      } else {
         this.data.push({id: name, name: name});
         this.saveData();
         return 'success';
      }

   }

};

export default tagListModel;