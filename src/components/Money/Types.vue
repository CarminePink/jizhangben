<template>
   <div>
      <ul class="types">
         <li class="selected">流出</li>
         <li>流入</li>
      </ul>
   </div>
</template>

<script lang="ts">
   export default {
      name: 'Types'
   };
</script>

<style scoped lang="scss">
   @import "~@/assets/style/helper.scss";
   .types {
      display: flex;

      > li {
         position: relative;
         font-family: $font-hei;
         padding: 14px 0;
         font-size: 24px;
         background: #c4c4c4;
         width: 50%;
         display: flex;
         justify-content: center;

         &.selected::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background: #333333;
         }
      }
   }
</style>