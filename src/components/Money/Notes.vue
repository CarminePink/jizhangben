<template>
   <div>
      <label class="notes">
         <span class="name">备注</span>
         <input type="text" v-model="value" placeholder="在这里输入备注">
      </label>
   </div>
</template>

<script lang="ts">
   import Vue from 'vue';
   import {Component, Watch} from 'vue-property-decorator';

   @Component
   export default class Notes extends Vue {
      value = '';

      @Watch('value')
      onValueChanged(newValue: string) {
         this.$emit('update:Notes', newValue);
      }
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