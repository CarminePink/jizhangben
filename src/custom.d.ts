type RecordItem = {
   type: string;
   tag: string[];
   notes: string;
   Amount: number;
   createdAt?: Date;
}
type Tag = {
   id: string;
   name: string;
}
type TagListModel = {
   data: Tag[];
   getData: () => Tag[];
   create: (name: string) => string;
   updateData: (id: string, name: string) => 'success' | 'not found' | 'duplicated';
   removeData: (id: string) => boolean;
   saveData: () => void;
}

interface Window {
   tagList: Tag[];
   createTag: (name: string) => void;
   removeTag: (id: string) => boolean;
   updateTag: (id: string, name: string) => 'success' | 'not found' | 'duplicated';
   findTag: (id: string) => Tag | undefined;

   recordList: RecordItem[];
   createRecord: (record: RecordItem) => void;
}