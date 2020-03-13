<template>
   <div class="tags">
      <ul class="current">
         <li>衣</li>
         <li>食</li>
         <li>住</li>
         <li>行</li>
         <li>衣</li>
         <li>食</li>
         <li>住</li>
      </ul>
      <div class="new">
         <button>新增标签</button>
      </div>
   </div>
</template>

<script lang="ts">
   export default {
      name: 'Tags'
   }
</script>

<style scoped lang="scss">
   .tags {
      padding: 16px;
      font-size: 14px;
      flex-grow: 1;
      > .current {
         display: flex;
         flex-wrap:wrap;
         > li {
            margin-top: 8px;
            margin-right: 12px;
            padding: 0 20px;
            height: 30px;
            line-height: 30px;
            background: #d9d9d9;
            border-radius: 50%;
         }
      }

      > .new {
         position: relative;
         padding-top: 16px;

         > button {
            position: absolute;
            right: 0;
            color: #999;
            padding: 0 3px;
            background: transparent;
            border: none;
            border-bottom: 1px solid;
         }
      }
   }
</style>