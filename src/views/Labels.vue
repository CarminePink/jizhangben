<template>
   <Layout>
      <ol class="tags">
         <li v-for="tag in tags" :key="tag">
            <span>{{tag}}</span>
            <Icon name="right"/>
         </li>

      </ol>
      <div class="createTag-wrapper">
         <button class="createTag" @click="createTag">新建标签</button>
      </div>

   </Layout>
</template>

<script lang="ts">
   import Vue from 'vue';
   import {Component} from 'vue-property-decorator';
   import tagListModel from '@/models/tagListModel';


   @Component
   export default class Labels extends Vue {
      tags = tagListModel.getData();

      createTag() {
         const name = window.prompt('请输入标签名');
         if (name) {
            const message = tagListModel.create(name);
            if (message === 'duplicated') {
               alert('不可添加重复标签');
            } else {
               return;
            }
         }
      }
   }
</script>

<style lang="scss">
   .tags {
      background: white;

      > li {
         display: flex;
         align-items: center;
         justify-content: space-between;
         padding-left: 16px;
         border-bottom: 1px solid #dddde0;
         min-height: 44px;
      }

      svg {
         width: 24px;
         height: 24px;
         margin-right: 16px;
         color: #333;
      }
   }

   .createTag {
      background-color: #767676;
      padding: 0 16px;
      border-radius: 5px;
      border: none;
      height: 40px;

      &-wrapper {
         text-align: center;
         padding-top: 16px;
         margin-top: 28px;
      }
   }
</style>