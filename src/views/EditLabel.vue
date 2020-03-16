<template>
   <Layout>
      <div>
         <Icon name="left"/>
         <span>编辑标签</span>
      </div>
      <Notes filed-name="标签名" place-holder="请输入标签名"/>
   </Layout>
</template>

<script lang="ts">
   import Vue from 'vue';
   import {Component} from 'vue-property-decorator';
   import tagListModel from '@/models/tagListModel';
   import Notes from '@/components/Money/Notes.vue';
   @Component({
      components: {Notes}
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

</style>