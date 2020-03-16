<template>
   <Layout>
      <div class="tags">
         <router-link :to="`/labels/edit/${tag.id}`" v-for="tag in tags" :key="tag.id" class="tag">
            <span>{{tag.name}}</span>
            <Icon name="right"/>
         </router-link>

      </div>
      <div class="createTag-wrapper">
         <Button class="createTag" @click.native="createTag">新建标签</Button>
      </div>

   </Layout>
</template>

<script lang="ts">
   import Vue from 'vue';
   import {Component} from 'vue-property-decorator';
   import Button from '@/components/Button.vue';
   import store from '@/store/index2';

   @Component({
      components: {Button}
   })
   export default class Labels extends Vue {
      tags = store.tagList;

      createTag() {
         const name = window.prompt('请输入标签名');
         if (name) {
            store.createTag(name);
         }
      }
   }
</script>

<style lang="scss">
   .tags {
      background: white;

      > .tag {
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