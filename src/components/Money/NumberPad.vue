<template>
   <div class="numberPad">
      <div class="output">{{output}}</div>
      <div class="buttons">
         <button @click="inputContent('1')">1</button>
         <button @click="inputContent('2')">2</button>
         <button @click="inputContent('3')">3</button>
         <button @click="remove">删除</button>
         <button @click="inputContent('4')">4</button>
         <button @click="inputContent('5')">5</button>
         <button @click="inputContent('6')">6</button>
         <button @click="clear">清空</button>
         <button @click="inputContent('7')">7</button>
         <button @click="inputContent('8')">8</button>
         <button @click="inputContent('9')">9</button>
         <button class="ok" @click="ok">ok</button>
         <button @click="inputContent('0')">0</button>
         <button @click="inputContent('.')">.</button>
         <button>backspace</button>
      </div>
   </div>
</template>

<script lang="ts">
   import Vue from 'vue';
   import {Component} from 'vue-property-decorator';

   @Component
   export default class NumberPad extends Vue {
      output = '0';

      inputContent(content: string) {
         if (this.output.length >= 16) {
            return;
         }
         if (this.output.indexOf('.') >= 0) {
            if (content === '.') {
               return;
            }
         }
         if (this.output === '0') {
            if ('0123456789'.indexOf(content) >= 0) {
               this.output = content;
            }
            if (content === '.') {
               this.output += content;
            }
         } else {
            this.output += content;
         }
      }

      remove() {
         if (this.output.length > 1) {
            const length = this.output.length;
            this.output = this.output.substring(0, length - 1);
         } else {
            this.output = '0';
         }
      }

      clear() {
         this.output = '0';
      }

      ok() {
         this.$emit('update:Amount', this.output);
         this.$emit('submit', this.output);
         this.output = '0';
      }
   }
</script>

<style scoped lang="scss">
   @import "~@/assets/style/helper.scss";

   .numberPad {
      > .output {
         @extend %clearFix;
         @extend %innerShadow;
         font-size: 36px;
         font-family: Consolas monospace;
         text-align: right;
         padding: 9px 16px;
         height: 72px;
      }

      > .buttons {
         @extend %clearFix;

         > button {
            float: left;
            width: 25%;
            height: 64px;
            background: transparent;
            border: none;

            &.ok {
               float: right;
               height: 128px;
            }

            &:nth-child(1) {
               background: #f2f2f2;
            }

            &:nth-child(2), &:nth-child(5) {
               background: #e0e0e0;
            }

            &:nth-child(3), &:nth-child(6), &:nth-child(9) {
               background: #d3d3d3;
            }

            &:nth-child(4), &:nth-child(7), &:nth-child(10), &:nth-child(13) {
               background: #c1c1c1
            }

            &:nth-child(8), &:nth-child(11), &:nth-child(14) {
               background-color: #a9a9a9;
            }

            &:nth-child(12) {
               background: #8b8b8b;
            }

            &:nth-child(15) {
               background: #9a9a9a;
            }

         }
      }
   }
</style>