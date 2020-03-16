<template>
   <button class="button">
      <slot/>
   </button>
</template>

<script lang="ts">
   import Vue from 'vue'
   import {Component} from 'vue-property-decorator';

   @Component
   export default class Button extends Vue {

   }
</script>

<style scoped lang="scss">
   .button {
      background-color: #767676;
      padding: 0 16px;
      border-radius: 5px;
      border: none;
      height: 40px;
      color: white;

   }
</style>