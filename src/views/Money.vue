<template>
   <div class="nav-wrapper">
      <div class="content">
         <p>Money.vue</p>
      </div>
      <Nav/>
   </div>
</template>

<script lang="ts">
   export default {
      name: 'Money',
   };
</script>

<style scoped lang="scss">
   .nav-wrapper {
      display: flex;
      flex-direction: column;
      height: 100vh;
   }

   .content {
      border: 1px solid green;
      overflow: auto;
      flex-grow: 1;
   }
</style>