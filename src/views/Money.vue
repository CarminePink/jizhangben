<template>
   <Layout class-prefix="layout">
      <Types/>
      <Tags :tag-source="tags"/>
      <Notes/>
      <NumberPad/>
   </Layout>
</template>

<script>
   import Types from '@/components/Money/Types.vue'
   import Tags from '@/components/Money/Tags.vue'
   import Notes from '@/components/Money/Notes.vue'
   import NumberPad from '@/components/Money/NumberPad.vue'

   export default {
      name: 'Money',
      components: {NumberPad, Notes, Tags, Types},
      data() {
         return {
            tags: ['美食', '交通', '娱乐', '学习', '日常']
         }
      }
   }
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