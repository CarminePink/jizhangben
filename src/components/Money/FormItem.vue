<template>
   <div>
      <label class="FormItem">
         <span class="name">{{this.filedName}}</span>
         <input type="text" v-model="value" :placeholder="this.placeHolder">
      </label>
   </div>
</template>

<script lang="ts">
   import Vue from 'vue';
   import {Component, Watch, Prop} from 'vue-property-decorator';

   @Component
   export default class FormItem extends Vue {
      value = '';

      @Prop() filedName!: string;
      @Prop() placeHolder?: string;

      @Watch('value')
      onValueChanged(newValue: string) {
         this.$emit('update:Notes', newValue);
      }
   }
</script>

<style scoped lang="scss">
   .FormItem {
      //margin-top: 16px;
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