<template>
   <nav>
      <router-link to="/money" class="item" active-class="selected">
         <Icon name="money"/>
         记账
      </router-link>

      <router-link to="/labels" class="item" active-class="selected">
         <Icon name="label"/>
         分类
      </router-link>

      <router-link to="/statistics" class="item" active-class="selected">
         <Icon name="statistics"/>
         统计
      </router-link>
   </nav>
</template>

<script lang="ts">
   export default {
      name: 'Nav'
   };
</script>

<style scoped lang="scss">
   @import "~@/assets/style/helper.scss";
   nav {
      display: flex;
      box-shadow:0 0 3px rgba(0,0,0,0.25);
      font-style: 12px;
      >.item{
         padding: 2px 0;
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
         width: 33.333%;
      }
      >.item.selected{
         color: $color-highlight;
      }
      .icon{
         width: 32px;
         height: 32px;
      }
   }
</style>