<template>
   <div>
      <ul class="types">
         <li :class="this.type ==='-' && 'selected' " @click="selectType('-')">流出</li>
         <li :class="this.type ==='+' && 'selected' " @click="selectType('+')">流入</li>
      </ul>
   </div>
</template>

<script lang="ts">
   import Vue from 'vue';
   import {Component, Prop} from 'vue-property-decorator';

   @Component //Component是一个装饰器
   export default class Types extends Vue {

      @Prop() readonly type!: string;//-代表流出 +代表流入  默认为流出
      selectType(type: string) {
         if (type !== '-' && type !== '+') {
            throw  new Error('type类型未知');
         }
         this.$emit('update:type', type);
      }
   }
</script>

<style scoped lang="scss">
   @import "~@/assets/style/helper.scss";

   .types {
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