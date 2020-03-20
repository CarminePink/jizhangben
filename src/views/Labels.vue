<template>
   <Layout>
      <div class="edit">
         <span>标签编辑页</span>
         <Icon name="bianji"/>
      </div>
      <div class="tags">
         <router-link :to="`/labels/edit/${tag.id}`" v-for="tag in tags" :key="tag.id" class="tag">
            <span>{{tag.name}}</span>
            <Icon :name="tag.iconName" class="iconTag"/>
            <Icon name="right"/>
         </router-link>

      </div>
   </Layout>
</template>

<script lang="ts">
   import Vue from 'vue';
   import {Component} from 'vue-property-decorator';
   import Button from '@/components/Button.vue';

   @Component({
      components: {Button},
   })
   export default class Labels extends Vue {
      get tags(){
         return this.$store.state.tagList;
      }
      created(){
         this.$store.commit('getTags');
      }

      createTag() {
         const name = window.prompt('请输入标签名');
         if (name) {
            this.$store.commit('createTag',name);
         }
      }
   }
</script>

<style lang="scss">
   @import "~@/assets/style/helper.scss";
   .tags {
      background: white;

      > .tag {
         display: flex;
         align-items: center;
         justify-content: space-between;
         padding-left: 16px;
         border-bottom: 1px solid #dddde0;
         min-height: 44px;

         .iconTag{
            margin-right: auto;
            margin-left: 8px;
         }
      }

      svg {
         width: 24px;
         height: 24px;
         margin-right: 16px;
         color: #333;
      }
   }
   .edit{
      line-height: 48px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid #666;
      > span{
         font-size: 18px;
         font-family: $font-hei;
         padding: 4px 8px;
         margin: 8px 0;
      }
   }

</style>