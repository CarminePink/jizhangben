<template>
   <ul class="tabs">
      <li :class="{selected: item.value ===value}" v-for="item in dataSource" :key="item.value" @click="select(item.value)">
         {{item.text}}
      </li>
   </ul>
</template>

<script lang="ts">
   import Vue from 'vue';
   import {Component, Prop} from 'vue-property-decorator';

   @Component
   export default class Tabs extends Vue {
      @Prop() dataSource!: { text: string; value: string }[];
      @Prop() readonly value!: string;
      @Prop(String) classPrefix?: string;

      select(newValue: string) {
         this.$emit('update:value', newValue);
      }
   }
</script>

<style scoped lang="scss">
   @import "~@/assets/style/helper.scss";

   .tabs {
      display: flex;

      > li {
         position: relative;
         font-family: $font-hei;
         padding: 14px 0;
         font-size: 24px;
         background: #c4c4c4;
         width: 50%;
         display: flex;
         justify-content: center;

         &.selected::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background: #333333;
         }
      }
   }
</style>