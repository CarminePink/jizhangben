<template>
   <div class="x">
      <Layout>
         <Types :type.sync="type" class-prefix="statistics"/>
         <Tabs :data-source="intervalList" :value.sync="interval"/>
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