<template>
   <div class="tags">
      <ul class="current">
         <li :class="selectedTag.indexOf(tag)>=0 && 'selected'" v-for="tag in tagSource" :key="tag"
             @click="select(tag)">{{tag}}
         </li>
      </ul>
      <div class="new">
         <button>新增标签</button>
      </div>
   </div>
</template>

<script lang="ts">
   import Vue from 'vue';
   import {Component, Prop} from 'vue-property-decorator';

   @Component
   export default class Tags extends Vue {
      @Prop() tagSource: string[] | undefined;
      selectedTag: string[] = ['美食'];

      select(tag: string) {
         if (this.selectedTag.length >= 0) {
            this.selectedTag = [];
         }
         this.selectedTag.push(tag);
      }
   }
</script>

<style scoped lang="scss">
   .tags {
      padding: 16px;
      font-size: 14px;
      flex-grow: 1;

      > .current {
         display: flex;
         flex-wrap: wrap;

         > li {
            margin-top: 8px;
            margin-right: 12px;
            padding: 0 20px;
            height: 30px;
            line-height: 30px;
            background: #d9d9d9;
            border-radius: 50%;

            &.selected {
               background: #f60;
            }
         }
      }

      > .new {
         position: relative;
         padding-top: 16px;

         > button {
            position: absolute;
            right: 0;
            color: #999;
            padding: 0 3px;
            background: transparent;
            border: none;
            border-bottom: 1px solid;
         }
      }
   }
</style>