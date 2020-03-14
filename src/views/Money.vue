<template>
   <Layout class-prefix="layout">
      <Types :type.sync="record.type"/>
      <Tags :tag-source.sync="tags" @update:Tag="onSelectTag"/>
      <Notes @update:Notes="onUpdateNotes"/>
      <NumberPad @update:Amount="onUpdateAmount"/>
   </Layout>
</template>

<script lang="ts">
   import Vue from 'vue';
   import Types from '@/components/Money/Types.vue';
   import Tags from '@/components/Money/Tags.vue';
   import Notes from '@/components/Money/Notes.vue';
   import NumberPad from '@/components/Money/NumberPad.vue';
   import {Component} from 'vue-property-decorator';

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