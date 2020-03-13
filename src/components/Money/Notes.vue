<template>
   <div>
      <label class="notes">
         <span class="name">备注</span>
         <input type="text" placeholder="在这里输入备注">
      </label>
   </div>
</template>

<script lang="ts">
   export default {
      name: 'Notes'
   }
</script>

<style scoped lang="scss">
   .notes {
      background: #c4c4c4;
      margin-top: 16px;
      display: flex;
      font-size: 14px;
      align-items: center;

      > .name {
         padding-left: 16px;
         padding-right: 16px;
      }

      > input {
         background: transparent;
         flex-grow: 1;
         height: 48px;
         border: none;
      }
   }
</style>