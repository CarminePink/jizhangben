type RecordItem = {
   type: string;
   tag: Tag[];
   notes: string;
   Amount: number;
   createdAt?: string;
}
type Tag = {
   id: string;
   name: string;
   iconName?: string;
}
type TagListModel = {
   data: Tag[];
   getData: () => Tag[];
   create: (name: string) => string;
   updateData: (id: string, name: string) => 'success' | 'not found' | 'duplicated';
   removeData: (id: string) => boolean;
   saveData: () => void;
}
type RootState = {
   recordList: RecordItem[];
   tagList: Tag[];
   currentTag?: Tag;
}

