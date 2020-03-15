const localStorageKeyName = 'tagList';

type TagListModel = {
   data: string[];
   getData: () => string[];
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
      if (this.data.indexOf(name) >= 0) {
         return 'duplicated';
      } else {
         this.data.push(name);
         this.saveData();
         return 'success';
      }

   }

};

export default tagListModel;