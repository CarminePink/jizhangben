const recordListModel = {
   data: [] as RecordItem[],
   clone(data: RecordItem[] | RecordItem) {
      return JSON.parse(JSON.stringify(data));
   },
   getData() {
      this.data = JSON.parse(localStorage.getItem('recordList') || '[]') as RecordItem[];
      return this.data;
   },
   saveData() {
      localStorage.setItem('recordList', JSON.stringify(this.data));
   }

};

export default recordListModel;