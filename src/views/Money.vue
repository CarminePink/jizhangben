<template>
   <Layout class-prefix="layout">
      <Types :type.sync="record.type"/>
      <Tags :tag-source.sync="tags" @update:Tag="onSelectTag"/>
      <Notes @update:Notes="onUpdateNotes"/>
      <NumberPad @update:Amount="onUpdateAmount" @submit="saveRecord"/>
   </Layout>
</template>

<script lang="ts">
   import Vue from 'vue';
   import Types from '@/components/Money/Types.vue';
   import Tags from '@/components/Money/Tags.vue';
   import Notes from '@/components/Money/Notes.vue';
   import NumberPad from '@/components/Money/NumberPad.vue';
   import {Component, Watch} from 'vue-property-decorator';
   import recordListModel from '@/models/recordListModel';
   import tagListModel from '@/models/tagListModel';


   @Component({
      components: {NumberPad, Notes, Tags, Types},
   })

   export default class Money extends Vue {
      tags = tagListModel.getData();

      recordList: RecordItem[] = recordListModel.getData();

      record: RecordItem = {
         type: '-',
         tag: [],
         notes: '',
         Amount: 0,
      };

      onUpdateType(type: string) {
         this.record.type = type;
      }

      onSelectTag(Tag: string[]) {
         this.record.tag = Tag;
      }

      onUpdateNotes(notes: string) {
         this.record.notes = notes;
      }

      onUpdateAmount(Amount: string) {
         this.record.Amount = parseFloat(Amount);
      }

      saveRecord() {
         //实现深拷贝
         const recordClone: RecordItem = recordListModel.clone(this.record);
         recordClone.createdAt = new Date();
         this.recordList.push(recordClone);
      }

      @Watch('recordList')
      onRecordListChanged() {
         recordListModel.saveData(this.recordList);
      }
   }
</script>

<style lang="scss">
   //是为Layout组件里的页面(除导航栏外)添加样式进行布局
   .layout-content {
      display: flex;
      flex-direction: column;
   }
</style>
<style scoped lang="scss">
   @import "~@/assets/style/helper.scss";
</style>