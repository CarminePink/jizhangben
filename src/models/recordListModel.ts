const recordListModel = {
   clone(data: RecordItem[] | RecordItem) {
      return JSON.parse(JSON.stringify(data));
   },
   getData() {
      return JSON.parse(localStorage.getItem('recordList') || '[]') as RecordItem[];
   },
   saveData(data: RecordItem[]) {

      localStorage.setItem('recordList', JSON.stringify(data));
   }

};

export default recordListModel;