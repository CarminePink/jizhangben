<template>
   <Layout>
      <span>编辑标签</span>
   </Layout>
</template>

<script lang="ts">
   import Vue from 'vue';
   import {Component} from 'vue-property-decorator';
   import tagListModel from '@/models/tagListModel';

   @Component
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