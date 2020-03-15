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

   type Record = {
      type: string;
      tag: string[];
      notes: string;
      Amount: number;
   }


   @Component({
      components: {NumberPad, Notes, Tags, Types},
   })

   export default class Money extends Vue {
      tags = ['美食', '交通', '娱乐', '学习', '日常'];

      recordList: Record[] = [];

      record: Record = {
         type: '-',
         tag: [],
         notes: '',
         Amount: 0
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
         const recordClone = JSON.parse(JSON.stringify(this.record));
         this.recordList.push(recordClone);
         console.log(this.recordList);
      }

      @Watch('recordList')
      onRecordListChanged() {
         localStorage.setItem('recordList', JSON.stringify(this.recordList));
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