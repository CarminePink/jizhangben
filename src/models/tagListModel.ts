const localStorageKeyName = 'tagList';
type Tag = {
   id: string;
   name: string;
}
type TagListModel = {
   data: Tag[];
   getData: () => Tag[];
   create: (name: string) => string;
   saveData: () => void;
}

const tagListModel: TagListModel = {
   data: [],
   getData() {
      this.data = JSON.parse(localStorage.getItem(localStorageKeyName) || '[]');
      return this.data;
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