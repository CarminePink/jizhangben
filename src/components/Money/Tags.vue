<template>
   <div class="tags">
      <ul class="current">
         <li :class="selectedTag.indexOf(tag.name)>=0 && 'selected'" v-for="tag in tagList" :key="tag.id"
             @click="select(tag.name)" class="displayTag">
            <Icon :name="tag.iconName"/>
            <span>{{tag.name}}</span>
         </li>
      </ul>
      <div class="new">
         <button @click="create()">新增标签</button>
      </div>
   </div>
</template>

<script lang="ts">
   import Vue from 'vue';
   import {Component, Watch} from 'vue-property-decorator';

   @Component
   export default class Tags extends Vue {
      get tagList() {
         return this.$store.state.tagList;
      }

      created() {
         this.$store.commit('getTags');
      }

      selectedTag: string[] = ['美食'];

      select(tag: string) {
         if (this.selectedTag.length >= 0) {
            this.selectedTag = [];
         }
         this.selectedTag.push(tag);
      }

      @Watch('selectedTag')
      onSelectedTagChanged(selectNewTag: string[]) {
         this.$emit('update:Tag', selectNewTag);
      }

      create() {
         const name = window.prompt('请输入要添加的标签名');
         if (name === '' || name === null) {
            return;
         } else {
            this.$store.commit('createTag', name);
         }
      }
   }
</script>

<style scoped lang="scss">
   .tags {
      background: white;
      padding: 16px;
      font-size: 14px;
      flex-grow: 1;

      > .current {
         display: flex;
         flex-wrap: wrap;

         > li {
            position: relative;
            margin-top: 8px;
            margin-right: 12px;
            padding: 2px 20px;
            /*height: 30px;*/
            line-height: 30px;
            background: #d9d9d9;
            border-radius: 45%;

            &.selected {
               background: #87c596;
            }
         }
      }

      .displayTag {
         border: 1px solid red;
         display: flex;
         flex-direction: column;
         align-items: center;
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