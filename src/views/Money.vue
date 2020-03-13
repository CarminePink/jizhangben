<template>
   <Layout class-prefix="layout">
      <Types/>
      <Tags/>
      <Notes/>
      <NumberPad/>
   </Layout>
</template>

<script lang="ts">
   import Types from '@/components/Money/Types.vue';
   import Tags from '@/components/Money/Tags.vue';
   import Notes from '@/components/Money/Notes.vue';
   import NumberPad from '@/components/Money/NumberPad.vue';

   export default {
      name: 'Money',
      components: {NumberPad, Notes, Tags, Types},
   };
</script>

<style lang="scss">
   //是为Layout组件里的页面(除导航栏外)添加样式进行布局
   .layout-content {
      display: flex;
      flex-direction: column;
   }
</style>
<style scoped lang="scss">
   @import "~@/assets/style/helper.scss";
</style>