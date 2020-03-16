import clone from '@/lib/clone.ts';

const recordListModel = {
   data: [] as RecordItem[],
   create(record: RecordItem){
      const recordClone: RecordItem = clone(record);
      recordClone.createdAt = new Date();
      this.data.push(recordClone);
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