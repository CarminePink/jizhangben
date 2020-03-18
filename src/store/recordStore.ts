import clone from '@/lib/clone';

const recordStore = {
   //record store
   recordList: [] as RecordItem[],
   getRecords() {
      this.recordList = JSON.parse(localStorage.getItem('recordList') || '[]') as RecordItem[];
      return this.recordList;
   },
   createRecord(record: RecordItem){
      const recordClone: RecordItem = clone(record);
      recordClone.createdAt = new Date().toISOString();
      this.recordList.push(recordClone);
      this.saveRecords();
   },
   saveRecords() {
      localStorage.setItem('recordList', JSON.stringify(this.recordList));
   }
};
recordStore.getRecords();

export default recordStore;