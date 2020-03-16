<template>
   <Layout>
      <div class="navBar">
         <Icon class="leftIcon" name="left"/>
         <span class="title">编辑标签</span>
         <span class="rightIcon"></span>
      </div>
      <div class="form-wrapper">
         <FormItem filed-name="标签名" place-holder="请输入标签名"/>
      </div>
      <div class="button-wrapper">
         <Button>删除标签</Button>
      </div>

   </Layout>
</template>

<script lang="ts">
   import Vue from 'vue';
   import {Component} from 'vue-property-decorator';
   import tagListModel from '@/models/tagListModel';
   import FormItem from '@/components/Money/FormItem.vue';
   import Button from '@/components/Button.vue';
   @Component({
      components: {Button, FormItem}
   })
   export default class EditLabel extends Vue {
      created() {
         console.log(this.$route.params);
         const id = this.$route.params.id;
         tagListModel.getData();
         const tags = tagListModel.data;
         const tag = tags.filter(item => item.id === id)[0];
         if (tag) {
            console.log(tag);
         } else {
            this.$router.replace('/404');
         }
      }
   }
</script>

<style scoped lang="scss">
   .navBar{
      background: white;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 16px;
      >.leftIcon{
         width: 24px;
         height: 24px;
      }
      >.title{

      }
      >.rightIcon{
         width: 24px;
         height: 24px;
      }
   }
   .form-wrapper{
      background: white;
      margin-top: 8px;
   }
   .button-wrapper{
      text-align: center;
      padding: 16px;
      margin-top: 28px;
   }
</style>