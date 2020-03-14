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

      @Prop(Number) xxx: number | undefined;
      //Prop告诉 Vue xxx是一个props属性，而不是普通的data
      // Number告诉Vue  在运行时 xxx的类型是Number（也就是你在给xxx传值的时候 得传number类型的值）
      //xxx是props的属性名
      //number|undefined 是告诉Vue TS在编译成JS时，xxx的类型（没有给xxx初始值的话 就要给一个undefined类型,所以以后在使用xxx的时候都得先判断是不是undefined）

      type = '-'; //-代表流出 +代表流入  默认为流出
      selectType(type: string) {
         if (type !== '-' && type !== '+') {
            throw  new Error('type类型未知');
         }
         this.type = type;
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