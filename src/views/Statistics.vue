<template>
   <div class="x">
      <Layout>
         <Types :type.sync="type" class-prefix="statistics"/>
         <Tabs :data-source="intervalList" :value.sync="interval"/>
         <div>
            <ol>
               <li v-for="(group,index) in result" :key="index">
                  <h3>{{group.title}}</h3>
                  <ol>
                     <li v-for="item in group.items" :key="item.id">{{item.Amount}}</li>
                  </ol>
               </li>
            </ol>
         </div>
      </Layout>
   </div>
</template>

<script lang="ts">
   import Vue from 'vue';
   import {Component} from 'vue-property-decorator';
   import Types from '@/components/Money/Types.vue';
   import Tabs from '@/components/Tabs.vue';

   @Component({
      components: {Tabs, Types}
   })
   export default class Statistics extends Vue {
      get recordList() {
         return (this.$store.state as RootState).recordList;
      }

      get result() {
         const {recordList} = this;
         type HashTableValue = { title: string; items: RecordItem[] }
         const hashTable: { [key: string]: HashTableValue } = {};
         for (let i = 0; i < recordList.length; i++) {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            const [date, time] = recordList[i].createdAt!.split('T');
            console.log(date);
            hashTable[date] = hashTable[date] || {title:date,items: []};
            hashTable[date].items.push(recordList[i]);
         }
         console.log(hashTable);
         return hashTable;
      }

      beforeCreate() {
         this.$store.commit('getRecords');
      }


      type = '-';
      interval = 'day';
      intervalList = [{text: '天', value: 'day'}, {text: '周', value: 'week'}, {text: '月', value: 'month'}];

   }
</script>

<style lang="scss" scoped>
   .x::v-deep .statistics-type {
      background: white;

      &.selected {
         background: #c4c4c4;

         &::after {
            display: none;
         }
      }

   }

</style>